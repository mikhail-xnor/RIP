class Ajax {
    async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        return {status: response.status, data: responseData};
    }
    async del(url) {
        const response = await fetch(url, {method: 'DELETE'});
        return {status: response.status};
    }
    async put(url, formData) {
        const response = await fetch(url, {method: 'PUT', body: formData});
        return {status: response.status};
    }
    async post(url, formData) {
        const response = await fetch(url, {method: 'POST', body: formData});
        return {status: response.status};
    }
}

export const ajax = new Ajax();