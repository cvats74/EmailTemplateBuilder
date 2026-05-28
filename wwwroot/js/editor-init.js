const editor = grapesjs.init({

    container: '#gjs',

    height: '100%',

    width: 'auto',

    fromElement: false,

    storageManager: false,

    noticeOnUnload: false,

    selectorManager: {
        appendTo: '#styles-container'
    },

    styleManager: {
        appendTo: '#styles-container'
    },

    traitManager: {
        appendTo: '#traits-container'
    },

    layerManager: {
        appendTo: '#layers-container'
    },

    blockManager: {
        appendTo: '#blocks-container'
    },

    panels: {
        defaults: []
    },

    deviceManager: {
        devices: [
            {
                id: 'Desktop',
                name: 'Desktop',
                width: ''
            },
            {
                id: 'Tablet',
                name: 'Tablet',
                width: '768px'
            },
            {
                id: 'Mobile',
                name: 'Mobile',
                width: '375px'
            }
        ]
    }
});

/* =========================
   BASIC BLOCKS
========================= */

const bm = editor.BlockManager;

/* TEXT */

bm.add('text', {
    label: 'Text',
    content: `
        <div style="padding:15px">
            Insert text here
        </div>
    `
});

/* HEADING */

bm.add('heading', {
    label: 'Heading',
    content: `
        <h1 style="padding:15px">
            Heading
        </h1>
    `
});

/* IMAGE */

bm.add('image', {
    label: 'Image',
    content: {
        type: 'image',
        style: {
            width: '100%'
        }
    }
});

/* BUTTON */

bm.add('button', {
    label: 'Button',
    content: `
        <button
            style="
                background:#8b5cf6;
                color:white;
                border:none;
                border-radius:8px;
                padding:14px 22px;
            ">
            Click Here
        </button>
    `
});

/* DIVIDER */

bm.add('divider', {
    label: 'Divider',
    content: `<hr/>`
});

/* 2 COLUMNS */

bm.add('2-columns', {
    label: '2 Columns',
    content: `
        <div style="display:flex;gap:10px;padding:10px">
            <div style="flex:1;padding:20px;background:#f1f5f9">
                Column 1
            </div>

            <div style="flex:1;padding:20px;background:#f1f5f9">
                Column 2
            </div>
        </div>
    `
});

/* TABLE */

bm.add('table', {
    label: 'Table',
    content: `
        <table border="1" width="100%" cellpadding="10">
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>

            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </table>
    `
});

/* =========================
   DEVICE SWITCHING
========================= */

document
    .getElementById('desktopBtn')
    .onclick = () => editor.setDevice('Desktop');

document
    .getElementById('tabletBtn')
    .onclick = () => editor.setDevice('Tablet');

document
    .getElementById('mobileBtn')
    .onclick = () => editor.setDevice('Mobile');

/* =========================
   PREVIEW
========================= */

let previewMode = false;

document
    .getElementById('previewBtn')
    .onclick = () => {

        if (!previewMode) {

            editor.runCommand('core:preview');

        } else {

            editor.stopCommand('core:preview');
        }

        previewMode = !previewMode;
    };

/* =========================
   UNDO / REDO
========================= */

document
    .getElementById('undoBtn')
    .onclick = () => editor.UndoManager.undo();

document
    .getElementById('redoBtn')
    .onclick = () => editor.UndoManager.redo();

/* =========================
   RESET
========================= */

document
    .getElementById('clearBtn')
    .onclick = () => {

        if (confirm('Clear canvas?')) {

            editor.DomComponents.clear();
        }
    };

/* =========================
   EXPORT HTML
========================= */

document
    .getElementById('exportBtn')
    .onclick = () => {

        const html = editor.getHtml();

        const css = editor.getCss();

        const finalHtml = `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
/>

<style>
${css}
</style>

</head>

<body>

${html}

</body>

</html>
`;

        downloadFile(
            finalHtml,
            'email-template.html'
        );
    };

/* =========================
   DOWNLOAD
========================= */

function downloadFile(content, filename) {

    const blob = new Blob(
        [content],
        {
            type: 'text/html'
        }
    );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement('a');

    a.href = url;

    a.download = filename;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}