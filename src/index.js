/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

export function highlight(
    element,
    /** @type { {name: string, match: RegExp | RegExp[], style?: { color?: string, fontFamily?: string } }[] } */
    patterns
) {
    if (element.tagName === "CODE") {

        let origHTML = element.innerHTML;
        let finalHTML = "";

        patterns.forEach(pattern => {
            const style = document.createElement('style')
            style.type = "text/css";
            style.innerHTML = `.${pattern.name} { ${pattern.style ? Object.entries(pattern.style).map(entry => entry.join(':')).join(';') : ''} }`;
            document.getElementsByTagName("head")[0].appendChild(style);

            let match = origHTML.match(pattern.match);

            while (match) {
                match = origHTML.match(pattern.match);
                if (match) {
                    let matchHTML = match[0];
                    let matchIndex = origHTML.indexOf(matchHTML);
                    let matchLength = matchHTML.length;
                    let beforeHTML = origHTML.substring(0, matchIndex);
                    let afterHTML = origHTML.substring(matchIndex + matchLength);
                    finalHTML += beforeHTML;
                    finalHTML += `<span class="${pattern.name}">${matchHTML}</span>`;
                    origHTML = afterHTML;
                }
            }
        });

        element.innerHTML = finalHTML;

        return true;
    } else {
        return false;
    }
}