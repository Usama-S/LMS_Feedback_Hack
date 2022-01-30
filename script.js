var form = document.getElementsByTagName('form')[0];
var tables = form.children;
for (let i = 0; i < tables.length; i++) {
    var trs = tables[i].children[0].children;
    for (let j = 0; j < trs.length; j++) {
        try {
            var elem = trs[j].getElementsByTagName('input')[2];
            elem.checked = true;
        }
        catch (err) {
            try {
                var elem = trs[j].getElementsByTagName('textarea')[0];
                elem.innerHTML = 'None';
            }
            catch (err) {
                try {
                    var elem = trs[j].getElementsByTagName('input')[0];

                    var allScripts = document.getElementsByTagName('script');
                    for (let i = 0; i < allScripts.length; i++) {
                        var element = allScripts[i];

                        const regex = /function submit_form/g;

                        if (element.innerHTML.match(regex)) {
                            const regex2 = /var captcha_original = "\w+"/g;
                            var captchaString = element.innerHTML.match(regex2);
                            var captchaText = captchaString.toString().split('"')[1];
                            elem.value = captchaText;
                        }
                    }
                }
                catch (err) {
                    console.log('-');
                }
            }
        }
    }
}

var allInput = form.getElementsByTagName('input');
var btnSubmit = allInput[allInput.length - 1];
btnSubmit.click();
