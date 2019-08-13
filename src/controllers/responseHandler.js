import Vue from 'vue'

export default {

    errorMessage(code, status, details, errorCode) {
        Vue.notify({
            group: "foo",
            type:'error',
            title: code + " - " + status,
            text: details + '(' + errorCode + ')' 
        })
    },

    networkError() {
        Vue.notify({
            group: "foo",
            type:'error',
            title: '500 - Network Error',
            text: 'Please check your connection.'
        })
    },

    successMessage(code, status, details) {
        Vue.notify({
            group: "foo",
            type:'success',
            title: code + " - " + status,
            text: details
        })
    }
}