
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.4.456/build/pdf.worker.js"
var CMAP_URL = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.4.456/cmaps/"
var CMAP_PACKED = true;

window.drawPdf = function (viewerContainerId, documentPath) {
    console.log("loading " + documentPath + " into element " + viewerContainerId);
    var container = document.getElementById(viewerContainerId);
    console.log(container);
    var eventBus = new pdfjsViewer.EventBus();

    var loadingTask = pdfjsLib.getDocument({
        url: documentPath,
        cMapUrl: CMAP_URL,
        cMapPackad: CMAP_PACKED,
    });

    loadingTask.promise.then(function (pdfDocument) {
        return pdfDocument.getPage(1).then(function (pdfPage) {
            var pdfPageView = new pdfjsViewer.PDFPageView({
                container: container,
                id: 1,
                scale: 1.0,
                defaultViewport: pdfPage.getViewport({ scale: 1 }),
                eventBus: eventBus,
                textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(),
                annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
            });
            pdfPageView.setPdfPage(pdfPage)
            return pdfPageView.draw();
        });
    });
}


