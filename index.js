nameRoute = 'https://core.alquist.ai/file/manual_storage/faiss_dbs/d728e045e484e4bb01ac73bc32e3c7f0/manual.pdf';
let loadingTask;
let pdfDoc = null,
canvas = document.querySelector('#cnv'),
ctx = canvas.getContext('2d'),
scale = 1.5,
numPage = 1;

const changePDF = (nameRoute, numPage) => {
    loadingTask = pdfjsLib.getDocument(nameRoute)
    loadingTask.promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        document.querySelector('#npages').innerHTML = pdfDoc.numPages;
        GeneratePDF(numPage)
    });
}

// changePDF(nameRoute, numPage);

const GeneratePDF = numPage => {
    pdfDoc.getPage(numPage).then(page => {
        let viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = {
            canvasContext: ctx,
            viewport: viewport
        }
        page.render(renderContext);
    })
    document.querySelector('#npages').innerHTML = numPage;
}

const PrevPage = () => {
    if (numPage === 1) {
        return
    }
    numPage--;
    GeneratePDF(numPage);
}

const NextPage = () => {
    if (numPage >= pdfDoc.numPages) {
        return
    }
    numPage++;
    GeneratePDF(numPage);
}

document.querySelector('#prev').addEventListener('click', PrevPage)
document.querySelector('#next').addEventListener('click', NextPage)

const container = document.getElementById("cnv"); // Replace with your PDF viewer container.

container.addEventListener("wheel", (event) => {
    // Calculate the intended page navigation.
    const isScrollingUp = event.deltaY < 0;

    if (isScrollingUp && numPage > 1) {
        numPage--; // Scroll up to the previous page.
    } else if (!isScrollingUp && numPage < pdfDoc.numPages) {
        numPage++; // Scroll down to the next page.
    }

    // Perform page navigation using PDF.js.
    GeneratePDF(numPage);

    // Prevent the default scroll behavior only if navigating pages.
    if (numPage !== 1 && numPage !== pdfDoc.numPages) {
        event.preventDefault();
    }
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var canvasID ="cnv"

var clientParams = {
    botKey: "6537b0f7a255e42135762f28",
    allowUrlParams: true,
    fullScreen: false,
    guiMode: 'chat',
    backgroundColor: '#6737ff',
    textInputEnabled: true,
    domain: '.flowstorm.ai',
    mode: 'voice',
    elementId: "botDiv",
    collapsable: true,
    interactionMode: "GUIDE",
    sound: true,
    title: "Porsche",
    search: true,
    controlIcons: {mic: true, mute: true, restart: true, magnifier: false},
    canvasID,
    pdfPageCallback: GeneratePDF,
    changePDF
};

const bot1 = new initFSClientBot({
    ...clientParams,
});