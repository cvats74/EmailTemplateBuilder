const editor = grapesjs.init({

    container: '#gjs',

    height: '100%',

    storageManager: false,

    fromElement: false,

    selectorManager: {
        appendTo: '#style-manager'
    },

    styleManager: {
        appendTo: '#style-manager'
    },

    panels: {
        defaults: []
    },

    blockManager: {
        appendTo: '.blocks-container'
    }
});

/* BLOCKS */

const blocks = editor.BlockManager;

blocks.add('text', {
    label: 'Text',
    content: `
        <div style="padding:10px;font-size:16px">
            Insert your text here
        </div>
    `
});

blocks.add('heading', {
    label: 'Heading',
    content: `
        <h1 style="padding:10px">
            Heading
        </h1>
    `
});

blocks.add('button', {
    label: 'Button',
    content: `
        <a
            href="#"
            style="
                display:inline-block;
                padding:14px 24px;
                background:#8b5cf6;
                color:white;
                border-radius:10px;
                text-decoration:none;
                font-weight:600;
            "
        >
            Click Here
        </a>
    `
});

blocks.add('divider', {
    label: 'Divider',
    content: `<hr/>`
});

blocks.add('image', {
    label: 'Image',
    content: {
        type: 'image',
        style: {
            width: '100%'
        }
    }
});

/* EXPORT */

document
    .getElementById('exportBtn')
    .addEventListener('click', () => {

        const html = editor.getHtml();
        const css = editor.getCss();

        const finalHtml = `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `;

        downloadFile(finalHtml);
    });

function downloadFile(content) {

    const blob = new Blob([content], {
        type: 'text/html'
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url;

    a.download = 'template.html';

    a.click();

    URL.revokeObjectURL(url);
}