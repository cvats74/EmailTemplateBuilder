/* =========================
SAVE TEMPLATE
========================= */

document
    .getElementById('saveBtn')
    .onclick = () => {

        const projectData = editor.getProjectData();

        localStorage.setItem(
            'email-template',
            JSON.stringify(projectData)
        );

        alert('Template Saved');
    };

/* =========================
LOAD TEMPLATE
========================= */

const savedData = localStorage.getItem('email-template');

if (savedData) {

    editor.loadProjectData(
        JSON.parse(savedData)
    );

}

/* =========================
EXPORT HTML
========================= */

document
    .getElementById('exportBtn')
    .onclick = () => {

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

        const blob = new Blob(
            [finalHtml],
            { type: 'text/html' }
        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');

        a.href = url;

        a.download = 'template.html';

        a.click();

        URL.revokeObjectURL(url);
    };