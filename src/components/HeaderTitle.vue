<template>
    <div>
        <b-container fluid class="header-nav pt-3 justify-content-between d-xl-flex">
            <b-col sm="12" xl="2" class="d-flex align-items-center justify-content-sm-center justify-content-xl-start">
                <div class="d-flex align-items-center">
                    <h2>{{ title }}</h2>
                </div>
            </b-col>
        </b-container>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HeaderTitle",
    props: {
        title: {
            type: String
        }
    }
    // setup(props) {
    //     console.log(props.title)
    // }
}
</script>


