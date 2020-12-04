const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation
function validation (field, regex) {
    console.log(field, regex);
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

for (const input of inputs) {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes);
        // console.log(e.target.attributes.name.value);
        validation(e.target, patterns[e.target.attributes.name.value]);
    })
}