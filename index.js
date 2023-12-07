// Zadání
// Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.



const skillHTML = Number(prompt("Zadej úroveň dovedností HTML na škále 0 - 100"));
const skillCSS = Number(prompt("Zadej úroveň dovedností CSS na škále 0 - 100"));
const skillJavaScript = Number(prompt("Zadej úroveň dovedností JavaScript na škále 0 - 100"));

let updateSkill = (id, number) => {
    const skillElement = document.querySelector(id);
    const skillProgress = skillElement.querySelector(".skill__progress");

    skillProgress.style.width = `${number}%`;

    skillElement.querySelector(".skill__value").textContent = `${number}/100`;
  
}



updateSkill("#skill1", skillHTML)
updateSkill("#skill2", skillCSS)
updateSkill("#skill3", skillJavaScript)





// console.log(skillHTML);
// console.log(skillCSS);
// console.log(skillJavaScript);
