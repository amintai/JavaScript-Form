document.getElementById('alert').style.display = 'none'
class User {
    constructor() {
        this.signUp = [{
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        }]
    }

    getUserData = () => {

        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        var confirmPassword = document.getElementById('confirmPassword').value
        var name = document.getElementById('name').value


        if (this.validateEmail(email)) {
            localStorage.setItem('email', email)
        } else {
            return false
        }

        if (this.validatePassword(password, confirmPassword)) {
            localStorage.setItem('password', password)
        } else {
            return false
        }

        if (this.validateName(name)) {
            localStorage.setItem('name', name)

        } else {
            return false
        }

        // if(true) {
        //     document.getElementsByClassName('alert').alert()
        //     setTimeout(() => {
        //         document.getElementsByClassName('alert').remove()
        //     }, 1000);
        // }

        if (true) {
            window.location = 'index.html'
        }


    }

    validateEmail = (email) => {

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        // email validation
        if (email === '') {

            document.getElementById('alert').innerHTML = 'Email Can not be Empty!'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else if (emailRegex.test(email) !== true) {
            document.getElementById('alert').innerHTML = 'Email Must be in Format'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);


            return false
        }
        return true
    }


    validatePassword = (password, confirmPassword) => {
        if (password === '') {
            document.getElementById('alert').innerHTML = 'Password Cant be Empty!'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else if (password.length < 8) {
            document.getElementById('alert').innerHTML = 'Length Should be More than 8!'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);
            return false
        } else if (password !== confirmPassword) {
            document.getElementById('alert').innerHTML = 'Confirm Password Should match'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);
            return false
        }
        return true
    }
    validateName = (name) => {
        if (name === '') {
            document.getElementById('alert').innerHTML = 'Please Enter Your Name'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);
            return false
        }
        return true
    }
    printUser = () => {
        const printEmail = localStorage.getItem('email')
        const printPass = localStorage.getItem('password')

        return {
            printEmail,
            printPass
        }
    }


    loginUser = () => {

        const emailLogin = document.getElementById('emailLogin').value
        const passwordLogin = document.getElementById('passwordLogin').value
        const data = this.printUser()


        if (emailLogin === data.printEmail && passwordLogin === data.printPass) {
            window.location = 'profile.html'
        } else {
            document.getElementById('alert').innerHTML = 'Wrong Credentials!'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        }

        console.log(data)
    }

    editProfile = () => {

        // const editEmail = document.getElementById('edit-email').value


        const editName = document.getElementById('edit_name').value
        const mobile = document.getElementById('mobile').value
        const editCity = document.getElementById('edit-city').value
        const editQual = document.getElementById('edit-qual').value
        const jobProfile = document.getElementById('job-profile').value
        var image = document.getElementById('image').value;


        const about = document.getElementById('about').value


        localStorage.setItem('jobProfile', jobProfile)


        if (editName === '') {
            document.getElementById('alert').innerHTML = 'Enter Name!'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else [
            localStorage.setItem('name', editName)
        ]
        if (mobile === '') {
            document.getElementById('alert').innerHTML = 'Enter Number'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else {
            localStorage.setItem('mobile', mobile)
        }
        if (editCity === '') {
            document.getElementById('alert').innerHTML = 'Enter City'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else {
            localStorage.setItem('city', editCity)
        }
        if (editQual === '') {
            document.getElementById('alert').innerHTML = 'Enter Qualification'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else {
            localStorage.setItem('Qualification', editQual)
        }
        if (image === '') {
            document.getElementById('alert').innerHTML = 'Upload Image'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else {
            localStorage.setItem('image', image)
        }

        if (about === '') {
            document.getElementById('alert').innerHTML = 'About Can not be Empty!'
            document.getElementById('alert').style.display = 'block'

            setTimeout(() => {
                document.getElementById('alert').style.display = 'none'
            }, 1500);

            return false
        } else {
            localStorage.setItem('about', about)
        }



        if (true) {
            window.location = 'profile.html'

        }
        const profileName = localStorage.getItem('name')
        return {
            profileName
        }


    }

    profilePage = () => {
        alert(profileName)
    }


    deleteProfile = () => {
        localStorage.clear()
        window.location = 'sign-up.html'
    }

    getProfilePageData = () => {
        document.getElementById('profileName').innerHTML = localStorage.getItem('name')
        document.getElementById('job_profile').innerHTML = localStorage.getItem('jobProfile')
        document.getElementById('profile_city').innerHTML = localStorage.getItem('city')

        document.getElementById('profile_fullName').innerHTML = localStorage.getItem('name')
        document.getElementById('profile_email').innerHTML = localStorage.getItem('email')
        document.getElementById('profile_phone').innerHTML = localStorage.getItem('mobile')

        document.getElementById('profile_qual').innerHTML = localStorage.getItem('Qualification')

        document.getElementById('print_about').innerHTML = localStorage.getItem('about')

        // image
        var dataImage = localStorage.getItem('image');
        var actImage = dataImage.split("\\").pop()


        document.getElementById('pro-image').src = `assestes/${actImage}`

    }


}





const obj = new User()
obj.printUser()



getUserData = () => {
    obj.getUserData()
}

loginUser = () => {
    obj.loginUser()
}

someMethod = () => {
    obj.someMethod()
}

editProfile = () => {
    obj.editProfile()
}
obj.getProfilePageData()




// var bannerImage = document.getElementById('profilePicture').value;

// localStorage.setItem("profilePicture", bannerImage);