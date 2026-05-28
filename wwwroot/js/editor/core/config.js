export const editorConfig = {
    container: '#gjs',

    height: '100vh',

    storageManager: false,

    fromElement: false,

    noticeOnUnload: false,

    selectorManager: {
        componentFirst: true
    },

    deviceManager: {
        devices: [
            {
                id: 'desktop',
                name: 'Desktop',
                width: ''
            },
            {
                id: 'tablet',
                name: 'Tablet',
                width: '768px'
            },
            {
                id: 'mobile',
                name: 'Mobile',
                width: '375px'
            }
        ]
    },

    panels: {
        defaults: []
    },

    blockManager: {
        appendTo: '#blocks-container'
    },

    layerManager: {
        appendTo: '#layers-container'
    },

    styleManager: {
        appendTo: '#styles-container',

        sectors: [
            {
                name: 'Typography',
                open: true,
                buildProps: [
                    'font-family',
                    'font-size',
                    'font-weight',
                    'color',
                    'line-height',
                    'letter-spacing',
                    'text-align'
                ]
            },
            {
                name: 'Dimension',
                open: false,
                buildProps: [
                    'width',
                    'height',
                    'padding',
                    'margin'
                ]
            },
            {
                name: 'Decorations',
                open: false,
                buildProps: [
                    'background-color',
                    'border-radius',
                    'border',
                    'box-shadow'
                ]
            }
        ]
    },

    canvas: {
        styles: [
            '/css/editor-canvas.css'
        ]
    }

};
