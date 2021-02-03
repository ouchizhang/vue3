export default (callback = null) => {
    return {
        data() {
            return {
                id: 1,
                form: {
                    name: 'a',
                    age: 18
                }
            }
        },
        methods: {
            getInfo() {
                this.form = {
                    name: 'b'
                }
                callback && callback()
            }
        },
    }
}