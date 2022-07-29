function id_check() {
    window.open('팝업 문서의 경로', '문서 이름', '옵션')
    window.open('', '', 'width=300,height=100, left=300, top=100')
}

function change_email() {
    let back_mail = document.getElementById('back_mail')
    let mail_list = document.getElementById('mail_list')

    let idx = mail_list.options.selectedIndex
    let val = mail_list.options[idx].value
    back_mail.value = val
}

function form_check() {
    let uname = document.getElementById('uname')
    let uid = document.getElementById('uid')
    let pw = document.getElementById('pw')
    let rpw = document.getElementById('rpw')

    if (uname.value == '') {
        alert('이름을 입력하세요')
        uname.focus()
        return false
    }
    if(uid.value == '') {
        alert('아이디를 입력하세요')
        uid.focus()
        return false
    }
    if(pw.value == '') {
        alert('비밀번호를 입력하세요')
        pw.focus()
        return false
    }
    let pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if(!pwCheck.test(pw.value)) {
        alert('형식에 맞게 입력해 주세요')
        pw.focus()
        return false
    }
    if(pw.value !== rpw.value) {
        alert('비밀번호가 일치하지 않습니다')
        rpw.focus()
        return false
    }
}