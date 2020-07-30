﻿pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.4.456/build/pdf.worker.min.js"

const SCALE_MAPPING = new Map([
    [1024, 0.9],
    [768, 0.6],
    [414, 0.5],
    [411, 0.5],
    [375, 0.45],
    [360, 0.4]
]);

function getRecommendedScale() {
    var recommendedScale = 1.0;
    var currentWidth = window.innerWidth;
    SCALE_MAPPING.forEach(function (value, key) {
        if (currentWidth > key) {
            return;
        }
        recommendedScale = value;
    });
    return recommendedScale;
}

window.drawPdf = function (viewerContainerId, binaryDocument) {
    var container = document.getElementById(viewerContainerId);
    var eventBus = new pdfjsViewer.EventBus();
    var loadingTask = pdfjsLib.getDocument(convertBase64ToBinary(binaryDocument));

    var scale = this.getRecommendedScale();

    loadingTask.promise.then(function (pdfDocument) {
        return pdfDocument.getPage(1).then(function (pdfPage) {
            var pdfPageView = new pdfjsViewer.PDFPageView({
                container: container,
                id: 1,
                scale: scale,
                defaultViewport: pdfPage.getViewport({ scale: scale }),
                eventBus: eventBus,
                textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(),
                annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
            });
            pdfPageView.setPdfPage(pdfPage)
            return pdfPageView.draw();
        });
    });
}

function convertBase64ToBinary(base64) {
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}



