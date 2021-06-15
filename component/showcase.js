const showcaseContent = `
<section class="bg-dark text-light p-5 pt-lg-5 p-lg-0 text-center text-sm-start">
<div class="container">
    <div class="d-sm-flex align-items-center justify-content-center">
        <div>
            <h1>Become a <span class="text-warning">Web Developer</span></h1>
            <p class="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev role
            </p>
            <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Start the enrollment</button>
        </div>
        <img class="img-fluid w-50 d-none d-sm-block" src="img/showcase.svg" alt="">
    </div>
</div>
</section>

<!-- Modal -->
<div class="modal fade" id="enroll" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptate eaque ex.
        </p>
        <form>
            <div class="mb-3">
                <label for="first-name" class="col-form-label">
                    First Name
                </label>
                <input type="text" class="form-control" id="firstName">
            </div>
            <div class="mb-3">
            <label for="first-name" class="col-form-label">
                First Name
            </label>
            <input type="text" class="form-control" id="firstName">
        </div>
        <div class="mb-3">
            <label for="first-name" class="col-form-label">
                First Name
            </label>
            <input type="text" class="form-control" id="firstName">
        </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
    </div>
    </div>
</div>
</div>
`;

