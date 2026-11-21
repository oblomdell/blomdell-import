export const AGE_STORAGE_KEY = "blomdell-age-verified";

/**
 * Körs i <head> innan sidan visas. Har besökaren redan svarat "Ja" sätts
 * data-age-ok på <html>, och CSS döljer åldersfrågan direkt – utan att den
 * hinner blinka till.
 */
export const ageGateScript = `try{if(localStorage.getItem("${AGE_STORAGE_KEY}")==="1")document.documentElement.setAttribute("data-age-ok","")}catch(e){}`;
