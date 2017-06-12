<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">{{user.name}}</div>

                    <div class="panel-body">
                        {{user.email}}
                    </div>
<child></child>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import testComponent from './hero.vue';

    export default {
        data () { /* ES2015 эквивалент для: `data: function () {` */
            return {
                user: [],


            };
        },

        created: function () {
            this.fetchData();
        },
        methods: {
            fetchData: function () {
                let _this = this;
                this.$http.get('http://yan.dev/admin/users/1').then(response => {
                    _this.user = JSON.parse(response.body);
                    // get body data
                    console.log(response.body);

                }, response => {
                    // error callback
                });

            }
        },
        components: {
            child: testComponent
        }
    };
</script>
