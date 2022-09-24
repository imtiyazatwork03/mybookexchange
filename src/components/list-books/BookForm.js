import React from 'react'

const BookForm = () => {
    return (
        <div>
            <aside className="col-md-9 col-lg-9">
                <div className="row pb-20">

                    {/* <!-- heading Start--> */}
                    <div className="col-md-12 ">

                    </div>
                    {/* <!-- heading End--> */}

                    {/* <!-- heading Start--> */}
                    <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20">
                        <h4>List Your Books
                        </h4>
                        <hr className="mt-20 mb-10" />
                        <div className="card-body">
                            <form className="text-left">
                                <div className="form-row  mb-20">
                                    <div className=" col-md-12">
                                        <label for="inputEmail4">Title</label>
                                        <input type="text" className="form-control" placeholder="Enter Book Tittle" />
                                    </div>

                                </div>

                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-6">
                                        <label for="first-name">Author Name</label>
                                        <input type="text" className="form-control" id="first-name" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="last-name">&nbsp;</label>
                                        <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="form-row mt-20 mb-20">
                                    <div className="form-group col-md-4">
                                        <label for="isbn">ISBN</label>
                                        <input type="text" className="form-control" id="isbn" placeholder="ISBN" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="book-condition">Book Condition</label>
                                        <select id="book-condition" className="form-control">
                                            <option selected="">Choose...</option>
                                            <option value="good">Good</option>
                                            <option value="fair">Fair</option>
                                            <option value="poor">Poor</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="quantity">Quantity</label>
                                        <select id="quantity" className="form-control">
                                            <option selected="1" value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="form-row mt-20 mb-20">

                                    <div className="form-group col-md-6">
                                        <label for="BookType">BookType</label>
                                        <select id="BookType" className="form-control">
                                            <option selected="">Choose...</option>
                                            <option value="regularbook">Regular Book</option>
                                            <option value="textbook">Text Book</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label for="categories">Category</label>
                                        <select id="categories" className="form-control">

                                            <option selected="">Choose...</option>
                                            <option value="67">Architecture</option><option value="68">Art</option><option value="72">Childrens Books</option><option value="73">Computing &amp; Internet</option><option value="75">Crafts &amp; Hobbies</option><option value="77">Education &amp; Teaching</option><option value="78">Fiction &amp; Literature</option><option value="80">Graphic Novels</option><option value="81">History</option><option value="83">Humor</option><option value="84">Libros en espa?ol</option><option value="86">Mystery &amp; Crime</option><option value="87">Nonfiction</option><option value="88">Photography</option><option value="89">Politics &amp; Current Events</option><option value="90">Psychology</option><option value="91">Reference</option><option value="92">Religion</option><option value="93">Romance</option><option value="94">Science &amp; Nature</option><option value="95">Science Fiction &amp; Fantasy</option><option value="96">Self-Improvement</option><option value="97">Sports &amp; Adventure</option><option value="98">Travel</option><option value="99">Wine</option><option value="101">Antiques &amp; Collectibles</option><option value="104">Bibles</option><option value="105">Biography &amp; Autobiography</option><option value="106">Body Mind &amp; Spirit</option><option value="109">Comics</option><option value="111">Cooking &amp; Food</option><option value="113">Design</option><option value="114">Drama</option><option value="116">Family &amp; Relationships</option><option value="118">Foreign Language Study</option><option value="119">Games</option><option value="120">Gardening</option><option value="122">Health &amp; Fitness</option><option value="124">House &amp; Home</option><option value="126">Juvenile Fiction</option><option value="127">Juvenile Nonfiction</option><option value="128">Language Arts &amp; Disciplines</option><option value="129">Law</option><option value="131">Literary Collections</option><option value="132">Literary Criticism</option><option value="133">Mathematics</option><option value="134">Medical &amp; Medicine</option><option value="135">Music</option><option value="137">Nature</option><option value="139">Performing Arts</option><option value="140">Pets</option><option value="141">Philosophy</option><option value="143">Poetry</option><option value="152">Social Science</option><option value="154">Technology &amp; Engineering</option><option value="155">Transportation</option><option value="157">True Crime</option><option value="159">Other</option><option value="160">Business &amp; Economics</option>

                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="button">List Book Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default BookForm