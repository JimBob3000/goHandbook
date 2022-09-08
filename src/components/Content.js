const Content = (page) => {
    return (
        <div className="px-6 md:px-6 lg:px-0 py-16 text-slate-800 md:w-[700px] lg:w-full lg:ml-[30px] 2xl:ml-[60px] lg:mr-[0px] xl:w-auto xl:max-w-[900px]   mx-auto">

            {page.page === "Home" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Home</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Welcome</h1>
                    <p className="text-[#334155]">Welcome to the GoLang Handbook, the go to place for Go code examples and explanations. To begin, select a topic on the left.</p>
                </div>
            }  
            {page.page === "Loops" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Loops</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Loops In Go</h1>
                    <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
                    
                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">For Loop</h2>
                    <div className="code">
                        <p>
                            <span className="conditional">for</span> <span className="variable">i</span> := 0; <span className="variable">i</span> &#60; 10&#x3b; <span className="variable">i</span>++ <span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="comment">// Code here</span>
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </p>
                    </div>

                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">For Each Loop</h2>
                    <div className="code">
                        <p>
                            <span className="comment">// Runes (chars)</span><br />
                            <span className="conditional">for</span> <span className="variable">index</span>, <span className="variable">char</span> := <span className="conditional">range</span> <span className="string">"hello"</span> &#123;<br />
                            <div className="indent">
                                <span className="comment">// Code here</span>
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </p>
                    </div>
                    <br />
                    <div className="code">
                        <p>
                            <span className="comment">// Slices</span><br />
                            <span className="variable">words</span> := <span className="squareBracket">[]</span><span className="type">string</span><span className="curlyBracket">&#123;</span><span className="string">"apples"</span>, <span className="string">"oranges"</span>, <span className="string">"bananas"</span><span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="conditional">for</span> <span className="variable">index</span>, <span className="variable">value</span> := <span className="conditional">range</span> <span className="variable">words</span> &#123;<br />
                            <div className="indent">
                                <span className="comment">// Code here</span>
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </p>
                    </div>
                    <br />
                    <div className="code">
                        <p>
                            <span className="comment">// Maps</span><br />
                            <span className="variable">stock</span> := <span className="keyword">map</span><span className="squareBracket">[<span className="type">string</span>]</span><span className="type">int</span> <span className="curlyBracket">&#123;</span><span className="string">"apples"</span>: 5, <span className="string">"oranges"</span>: 2, <span className="string">"bananas"</span>: 3<span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="conditional">for</span> <span className="variable">key</span>, <span className="variable">value</span> := <span className="conditional">range</span> <span className="variable">stock</span> &#123;<br />
                            <div className="indent">
                                <span className="comment">// Code here</span>
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </p>
                    </div>

                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">While Loop</h2>
                    <div className="code">
                        <p>
                            <span className="variable">n</span> := 0<br />
                            <br />
                            <span className="conditional">for</span> <span className="variable">n</span> &#60; 10 <span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="comment">// Code here</span><br />
                                <span className="variable">n</span>++<br />
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </p>
                    </div>

                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Infinite Loop</h2>
                    <div className="code">
                        <p>
                            <span className="conditional">for</span> <span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="comment">// When condition is satisfied</span><br />
                                <span className="conditional">break</span><br />
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </p>
                    </div>
                </div>
            }  
            {page.page === "Structs" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Structs</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Structs In Go</h1>
                    <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
                    
                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Struct</h2>
                    <div className="code">
                        <span className="keyword">package</span> main<br />
                        <br />
                        <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                        <br />
                        <span className="keyword">type</span> <span className="type">Person</span> <span className="keyword">struct</span> <span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            <span className="variable">firstName</span> <span className="type">string</span><br />
                            <span className="variable">lastName</span> <span className="type">string</span><br />
                            <span className="variable">age</span> <span className="type">int</span><br />
                        </div>
                        <span className="curlyBracket">&#125;</span><br />
                        <br />
                        <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            <span className="variable">newPerson</span> := <span className="type">Person</span><span className="curlyBracket">&#123;</span><span className="string">"James"</span>, <span className="string">"Elliott"</span>, 28<span className="curlyBracket">&#125;</span><br />
                            <br />
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"First name: "</span>, <span className="variable">newPerson</span>.<span className="variable">firstName</span><span className="bracket">)</span><br />
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Last name: "</span>,  <span className="variable">newPerson</span>.<span className="variable">lastName</span><span className="bracket">)</span><br />
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Age: "</span>,  <span className="variable">newPerson</span>.<span className="variable">age</span><span className="bracket">)</span>
                        </div>
                        <span className="curlyBracket">&#125;</span><br />
                    </div>
                    
                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Embedded Struct</h2>
                    <div className="code">
                        <span className="keyword">package</span> main<br />
                        <br />
                        <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                        <br />
                        <span className="keyword">type</span> <span className="type">Person</span> <span className="keyword">struct</span> <span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            <span className="variable">firstName</span> <span className="type">string</span><br />
                            <span className="variable">lastName</span> <span className="type">string</span><br />
                            <span className="variable">age</span> <span className="type">int</span><br />
                            <span className="variable">pets</span> <span className="squareBracket">[]</span><span className="type">Animal</span><br />
                        </div>
                        <span className="curlyBracket">&#125;</span><br />
                        <br />
                        <span className="keyword">type</span> <span className="type">Animal</span> <span className="keyword">struct</span> <span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            <span className="variable">name</span> <span className="type">string</span><br />
                            <span className="variable">species</span> <span className="type">string</span><br />
                        </div>
                        <span className="curlyBracket">&#125;</span><br />
                        <br />
                        <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            <span className="variable">firstAnimal</span> := <span className="type">Animal</span><span className="curlyBracket">&#123;</span><span className="string">"Sam"</span>, <span className="string">"Cat"</span><span className="curlyBracket">&#125;</span><br />
                            <span className="variable">secondAnimal</span> := <span className="type">Animal</span><span className="curlyBracket">&#123;</span><span className="string">"Willis"</span>, <span className="string">"Dog"</span><span className="curlyBracket">&#125;</span><br />
                            <span className="variable">newPerson</span> := <span className="type">Person</span><span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="string">"James"</span>,<br />
                                <span className="string">"Elliott"</span>,<br />
                                28,<br />
                                <span className="squareBracket">[]</span><span className="type">Animal</span> <span className="curlyBracket">&#123;</span>
                                <div className="indent">
                                    <span className="variable">firstAnimal</span>,<br />
                                    <span className="variable">secondAnimal</span>,<br />
                                </div>
                                <span className="curlyBracket">&#125;</span>,<br />
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"First name: "</span>, <span className="variable">newPerson</span>.<span className="variable">firstName</span><span className="bracket">)</span><br />
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Last name: "</span>,  <span className="variable">newPerson</span>.<span className="variable">lastName</span><span className="bracket">)</span><br />
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Age: "</span>,  <span className="variable">newPerson</span>.<span className="variable">age</span><span className="bracket">)</span><br />
                            <br />
                            <span className="conditional">for</span> <span className="variable">i</span>, <span className="variable">pet</span> := <span className="conditional">range</span> <span className="variable">newPerson</span>.<span className="variable">pets</span> &#123;<br />
                            <div className="indent">
                                fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Pet "</span>, <span className="variable">i</span>+1<span className="bracket">)</span><br />
                                fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Name: "</span>,  <span className="variable">pet</span>.<span className="variable">name</span><span className="bracket">)</span><br />
                                fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Species: "</span>,  <span className="variable">pet</span>.<span className="variable">species</span><span className="bracket">)</span><br />
                            </div>
                            <span className="curlyBracket">&#125;</span>
                        </div>
                        <span className="curlyBracket">&#125;</span><br />
                    </div>
                </div>
            }
            {page.page === "Sorting" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Sorting</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Sorting Algorithms In Go</h1>
                    <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
                    
                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Bubble Sort</h2>
                    <div className="code">
                        <p>
                            <span className="keyword">package</span> main<br />
                            <br />
                            <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    <span className="variable">numbers</span> := <span className="squareBracket">[]</span><span className="type">int</span><span className="curlyBracket">&#123;</span>6, 4, 17, 3, 2, 9, 13<span className="curlyBracket">&#125;</span><br />
                                    <span className="function">bubbleSort</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span><br />
                                    fmt.<span className="function">Println</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span>
                                </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">bubbleSort</span><span className="bracket">(</span><span className="variable">numbers</span> <span className="squareBracket">[]</span><span className="type">int</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    <span className="variable">numbersLength</span> := <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span> - 1<br />
                                    <br />
                                    <span className="conditional">for</span> <span className="variable">i</span> := 0; <span className="variable">i</span> &#60; <span className="variable">numbersLength</span>&#x3b; <span className="variable">i</span>++ <span className="curlyBracket">&#123;</span><br />
                                    <div className="indent">
                                        <span className="conditional">for</span> <span className="variable">j</span> := 0; <span className="variable">j</span> &#60; <span className="variable">numbersLength</span>&#x3b; <span className="variable">j</span>++ <span className="curlyBracket">&#123;</span><br />
                                            <div className="indent">
                                            <span className="conditional">if</span> <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span> &#62; <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>+1<span className="squareBracket">]</span> <span className="curlyBracket">&#123;</span><br />
                                                <div className="indent">
                                                <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span>, <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>+1<span className="squareBracket">]</span> = <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>+1<span className="squareBracket">]</span>, <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span>
                                                </div>
                                            <span className="curlyBracket">&#125;</span>
                                            </div>
                                        <span className="curlyBracket">&#125;</span><br />
                                    </div>
                                    <span className="curlyBracket">&#125;</span>
                                </div>
                            <span className="curlyBracket">&#125;</span><br />
                        </p>
                    </div>

                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Insertion Sort</h2>
                    <div className="code">
                        <p>
                            <span className="keyword">package</span> main<br />
                            <br />
                            <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    <span className="variable">numbers</span> := <span className="squareBracket">[]</span><span className="type">int</span><span className="curlyBracket">&#123;</span>6, 4, 17, 3, 2, 9, 13<span className="curlyBracket">&#125;</span><br />
                                    <span className="function">insertionSort</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span><br />
                                    fmt.<span className="function">Println</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span>
                                </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">insertionSort</span><span className="bracket">(</span><span className="variable">numbers</span> <span className="squareBracket">[]</span><span className="type">int</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    <span className="conditional">for</span> <span className="variable">i</span> := 0; <span className="variable">i</span> &#60; <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span>&#x3b; <span className="variable">i</span>++ <span className="curlyBracket">&#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">currentNumber</span> := <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">i</span><span className="squareBracket">]</span><br />
                                        <span className="variable">currentIndex</span> := <span className="variable">i</span><br />
                                        <br />
                                        <span className="conditional">for</span> <span className="variable">currentIndex</span> &#62; 0 &#x26;&#x26; <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">currentIndex</span>-1<span className="squareBracket">]</span> &#62; <span className="variable">currentNumber</span> <span className="curlyBracket">&#123;</span>
                                            <div className="indent">
                                                <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">currentIndex</span><span className="squareBracket">]</span> = <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">currentIndex</span>-1<span className="squareBracket">]</span><br />
                                                <span className="variable">currentIndex</span>--
                                            </div>
                                        <span className="curlyBracket">&#125;</span><br />
                                        <br />
                                        <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">currentIndex</span><span className="squareBracket">]</span> = <span className="variable">currentNumber</span>
                                    </div>
                                    <span className="curlyBracket">&#125;</span>
                                </div>
                            <span className="curlyBracket">&#125;</span><br />
                        </p>
                    </div>

                    <hr className="my-14"></hr>
                    
                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Cocktail Sort</h2>
                    <div className="code">
                        <p>
                            <span className="keyword">package</span> main<br />
                            <br />
                            <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    <span className="variable">numbers</span> := <span className="squareBracket">[]</span><span className="type">int</span><span className="curlyBracket">&#123;</span>6, 4, 17, 3, 2, 9, 13<span className="curlyBracket">&#125;</span><br />
                                    <span className="function">cocktailSort</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span><br />
                                    fmt.<span className="function">Println</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span>
                                </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">cocktailSort</span><span className="bracket">(</span><span className="variable">numbers</span> <span className="squareBracket">[]</span><span className="type">int</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    <span className="variable">numbersLength</span> := <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span> - 1<br />
                                    <br />
                                    <span className="conditional">for</span> <span className="variable">i</span> := 0; <span className="variable">i</span> &#60; <span className="variable">numbersLength</span>&#x3b; <span className="variable">i</span>++ <span className="curlyBracket">&#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">altered</span> := <span className="keyword">false</span><br />
                                        <br />    
                                        <span className="conditional">for</span> <span className="variable">j</span> := 0; <span className="variable">j</span> &#60; <span className="variable">numbersLength</span>&#x3b; <span className="variable">j</span>++ <span className="curlyBracket">&#123;</span><br />
                                        <div className="indent">
                                            <span className="conditional">if</span> <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span> &#62; <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>+1<span className="squareBracket">]</span> <span className="curlyBracket">&#123;</span><br />
                                            <div className="indent">
                                                <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span>, <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>+1<span className="squareBracket">]</span> = <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>+1<span className="squareBracket">]</span>, <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span><br />
                                                <span className="variable">altered</span> = <span className="keyword">true</span><br />
                                            </div>
                                            <span className="curlyBracket">&#125;</span><br />
                                        </div>
                                        <span className="curlyBracket">&#125;</span><br />
                                        <br />
                                        <span className="conditional">if</span> !<span className="variable">altered</span><span className="curlyBracket"> &#123;</span><br />
                                        <div className="indent">
                                            <span className="conditional">break</span>
                                        </div>
                                        <span className="curlyBracket">&#125;</span><br />
                                        <br />
                                        <span className="conditional">for</span> <span className="variable">j</span> := <span className="variable">numbersLength</span>; <span className="variable">j</span> &#62; 0&#x3b; <span className="variable">j</span>-- <span className="curlyBracket">&#123;</span><br />
                                        <div className="indent">
                                            <span className="conditional">if</span> <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span> &#60; <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>-1<span className="squareBracket">]</span> <span className="curlyBracket">&#123;</span><br />
                                            <div className="indent">
                                                <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span>, <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>-1<span className="squareBracket">]</span> = <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span>-1<span className="squareBracket">]</span>, <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">j</span><span className="squareBracket">]</span><br />
                                                <span className="variable">altered</span> = <span className="keyword">true</span><br />
                                            </div>
                                            <span className="curlyBracket">&#125;</span><br />
                                        </div>
                                        <span className="curlyBracket">&#125;</span><br />
                                        <br />
                                        <span className="conditional">if</span> !<span className="variable">altered</span><span className="curlyBracket"> &#123;</span><br />
                                        <div className="indent">
                                            <span className="conditional">break</span>
                                        </div>
                                        <span className="curlyBracket">&#125;</span><br />
                                    </div>
                                    <span className="curlyBracket">&#125;</span>
                                </div>
                            <span className="curlyBracket">&#125;</span><br />
                        </p>
                    </div>
                </div>
            }   
            {page.page === "Searching" &&
                <div>
                    <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Searching</p>
                    <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Searching Algorithms In Go</h1>
                    <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
                    
                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Linear Search</h2>
                    <div className="code">
                        <p>
                            <span className="keyword">package</span> main<br />
                            <br />
                            <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="variable">numbers</span> := <span className="squareBracket">[]</span><span className="type">int</span><span className="curlyBracket">&#123;</span>6, 14, 11, 39, 5, 7, 28, 29, 40<span className="curlyBracket">&#125;</span><br />
                                <span className="variable">targetNumber</span> := 28<br />
                                <br />
                                <span className="variable">found</span>, <span className="variable">guessCount</span> := <span className="function">linearSearch</span><span className="bracket">(</span><span className="variable">numbers</span>, <span className="variable">targetNumber</span><span className="bracket">)</span><br />
                                <br />
                                <span className="conditional">if</span> <span className="variable">found</span> <span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    fmt.<span className="function">Printf</span><span className="bracket">(</span><span className="string">"Target number %v found in %v guesses.\n"</span>, <span className="variable">targetNumber</span>, <span className="variable">guessCount</span><span className="bracket">)</span><br />
                                </div>
                                <span className="curlyBracket">&#125;</span> <span className="conditional">else</span><span className="curlyBracket"> &#123;</span><br />
                                <div className="indent">
                                    fmt.<span className="function">Printf</span><span className="bracket">(</span><span className="string">"Target number %v not in slice.\n"</span>, <span className="variable">targetNumber</span><span className="bracket">)</span><br />
                                </div>
                                <span className="curlyBracket">&#125;</span>
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">linearSearch</span><span className="bracket">(</span><span className="variable">numbers</span> <span className="squareBracket">[]</span><span className="type">int</span>, <span className="variable">targetNumber</span> <span className="type">int</span><span className="bracket">) (</span><span className="type">bool</span>, <span className="type">int</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="conditional">for</span> <span className="variable">i</span> := 0; <span className="variable">i</span> &#60; <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span>&#x3b; <span className="variable">i</span>++ <span className="curlyBracket">&#123;</span><br />
                                    <div className="indent">
                                        <span className="conditional">if</span> <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">i</span><span className="squareBracket">]</span> == <span className="variable">targetNumber</span><span className="curlyBracket"> &#123;</span><br />
                                        <div className="indent">
                                            <span className="conditional">return</span> <span className="keyword">true</span>, <span className="variable">i</span>
                                        </div>
                                        <span className="curlyBracket">&#125;</span>
                                    </div>
                                <span className="curlyBracket">&#125;</span><br />
                                <br />
                                <span className="conditional">return</span> <span className="keyword">false</span>, <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span>
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                        </p>
                    </div>

                    <hr className="my-14"></hr>

                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Jump Search</h2>
                    <div className="code">
                        <p>
                            <span className="keyword">package</span> main<br />
                            <br />
                            <span className="keyword">import</span> <span className="package">"fmt"</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="variable">numbers</span> := <span className="squareBracket">[]</span><span className="type">int</span><span className="curlyBracket">&#123;</span>1, 1, 2, 5, 7, 8, 11, 11, 15, 19, 27, 29, 30, 31, 32, 33<span className="curlyBracket">&#125;</span><br />
                                <span className="variable">targetNumber</span> := 33<br />
                                <br />
                                <span className="variable">found</span>, <span className="variable">guessCount</span> := <span className="function">jumpSearch</span><span className="bracket">(</span><span className="variable">numbers</span>, <span className="variable">targetNumber</span><span className="bracket">)</span><br />
                                <br />
                                <span className="conditional">if</span> <span className="variable">found</span> <span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    fmt.<span className="function">Printf</span><span className="bracket">(</span><span className="string">"Target number %v found in %v guesses.\n"</span>, <span className="variable">targetNumber</span>, <span className="variable">guessCount</span><span className="bracket">)</span><br />
                                </div>
                                <span className="curlyBracket">&#125;</span> <span className="conditional">else</span><span className="curlyBracket"> &#123;</span><br />
                                <div className="indent">
                                    fmt.<span className="function">Printf</span><span className="bracket">(</span><span className="string">"Target number %v not in slice, searched %v times.\n"</span>, <span className="variable">targetNumber</span>, <span className="variable">guessCount</span><span className="bracket">)</span><br />
                                </div>
                                <span className="curlyBracket">&#125;</span>
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">jumpSearch</span><span className="bracket">(</span><span className="variable">numbers</span> <span className="squareBracket">[]</span><span className="type">int</span>, <span className="variable">targetNumber</span> <span className="type">int</span><span className="bracket">) (</span><span className="type">bool</span>, <span className="type">int</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="variable">guessCount</span> := 1<br />
                                <span className="variable">currentIndex</span> := 0<br />
                                <span className="variable">numbersLength</span> := <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span><br />
                                <span className="variable">jump</span> := 4<br />
                                <br />
                                <span className="conditional">for</span> <span className="curlyBracket"> &#123;</span><br />
                                <div className="indent">
                                    <span className="conditional">if</span> <span className="variable">currentIndex</span> &#62; <span className="variable">numbersLength</span><span className="curlyBracket"> &#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">currentIndex</span> = <span className="variable">currentIndex</span> - <span className="variable">jump</span><br />
                                        <span className="conditional">break</span>
                                    </div>
                                    <span className="curlyBracket">&#125;</span><br />
                                    <br />
                                    <span className="conditional">if</span> <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">currentIndex</span><span className="squareBracket">]</span> &#62; <span className="variable">targetNumber</span><span className="curlyBracket"> &#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">currentIndex</span> = <span className="variable">currentIndex</span> - <span className="variable">jump</span><br />
                                        <span className="conditional">break</span>
                                    </div>
                                    <span className="curlyBracket">&#125;</span><br />
                                    <br />
                                    <span className="variable">currentIndex</span> = <span className="variable">currentIndex</span> + <span className="variable">jump</span><br />
                                    <span className="variable">guessCount</span>++
                                </div>
                                <span className="curlyBracket">&#125;</span><br />
                                <br />
                                <span className="conditional">for</span> <span className="variable">currentIndex</span> &#60; <span className="variable">numbersLength</span><span className="curlyBracket"> &#123;</span><br />
                                <div className="indent">
                                    <span className="conditional">if</span> <span className="variable">numbers</span><span className="squareBracket">[</span><span className="variable">currentIndex</span><span className="squareBracket">]</span> == <span className="variable">targetNumber</span><span className="curlyBracket"> &#123;</span><br />
                                    <div className="indent">
                                        <span className="conditional">return</span> <span className="keyword">true</span>, <span className="variable">guessCount</span>
                                    </div>
                                    <span className="curlyBracket">&#125;</span><br />
                                    <br />
                                    <span className="variable">currentIndex</span>++<br />
                                    <span className="variable">guessCount</span>++
                                </div>
                                <span className="curlyBracket">&#125;</span><br />
                                <br />
                                <span className="conditional">return</span> <span className="keyword">false</span>, <span className="variable">guessCount</span>
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                        </p>
                    </div>

                    <hr className="my-14"></hr>
                    
                    <h2 className="text-2xl font-medium pb-8 text-slate-800">Binary Search</h2>
                    <div className="code">
                        <p>
                            <span className="keyword">package</span> main<br />
                            <br />
                            <span className="keyword">import</span> <span className="bracket">(</span><br />
                            <div className="indent">
                                <span className="package">"fmt"</span><br />
                                <span className="package">"math"</span><br />
                            </div>
                            <span className="bracket">)</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="variable">targetNumber</span> := 45<br />
                                <span className="variable">numbers</span> := <span className="squareBracket">[]</span><span className="type">int</span><span className="curlyBracket">&#123;&#125;</span><br />
                                <span className="conditional">for</span> <span className="variable">i</span> := 0; <span className="variable">i</span> &#60; 100&#x3b; <span className="variable">i</span>++ <span className="curlyBracket">&#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">numbers</span> = <span className="function">append</span><span className="bracket">(</span><span className="variable">numbers</span>, <span className="variable">i</span><span className="bracket">)</span>
                                    </div>
                                <span className="curlyBracket">&#125;</span><br />
                                <br />
                                <span className="variable">found</span>, <span className="variable">guessCount</span> := <span className="function">binarySearch</span><span className="bracket">(</span><span className="variable">numbers</span>, <span className="variable">targetNumber</span><span className="bracket">)</span><br />
                                <br />
                                <span className="conditional">if</span> <span className="variable">found</span> <span className="curlyBracket">&#123;</span><br />
                                <div className="indent">
                                    fmt.<span className="function">Printf</span><span className="bracket">(</span><span className="string">"Target number %v found in %v guesses.\n"</span>, <span className="variable">targetNumber</span>, <span className="variable">guessCount</span><span className="bracket">)</span><br />
                                </div>
                                <span className="curlyBracket">&#125;</span> <span className="conditional">else</span><span className="curlyBracket"> &#123;</span><br />
                                <div className="indent">
                                    fmt.<span className="function">Printf</span><span className="bracket">(</span><span className="string">"Target number %v not in slice, searched %v times.\n"</span>, <span className="variable">targetNumber</span>, <span className="variable">guessCount</span><span className="bracket">)</span><br />
                                </div>
                                <span className="curlyBracket">&#125;</span>
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                            <br />
                            <span className="keyword">func</span> <span className="function">binarySearch</span><span className="bracket">(</span><span className="variable">numbers</span> <span className="squareBracket">[]</span><span className="type">int</span>, <span className="variable">targetNumber</span> <span className="type">int</span><span className="bracket">) (</span><span className="type">bool</span>, <span className="type">int</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                            <div className="indent">
                                <span className="variable">min</span> := 0<br />
                                <span className="variable">max</span> := <span className="function">len</span><span className="bracket">(</span><span className="variable">numbers</span><span className="bracket">)</span><br />
                                <span className="variable">guess</span> := math.<span className="function">Floor</span><span className="bracket">(</span><span className="function">float64</span><span className="bracket">((</span><span className="variable">min</span> + <span className="variable">max</span><span className="bracket">)</span> / 2<span className="bracket">))</span><br />
                                <span className="variable">previousGuess</span> := <span className="variable">guess</span><br />
                                <span className="variable">guessCount</span> := 1<br />
                                <br />
                                <span className="conditional">for</span> <span className="function">int</span><span className="bracket">(</span><span className="variable">guess</span><span className="bracket">)</span> != <span className="variable">targetNumber</span><span className="curlyBracket"> &#123;</span><br />
                                <div className="indent">
                                    <span className="conditional">if</span> <span className="variable">targetNumber</span> &#62; <span className="function">int</span><span className="bracket">(</span><span className="variable">guess</span><span className="bracket">)</span><span className="curlyBracket"> &#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">min</span> = <span className="function">int</span><span className="bracket">(</span><span className="variable">guess</span><span className="bracket">)</span><br />
                                    </div>
                                    <span className="curlyBracket">&#125;</span> <span className="conditional">else</span> <span className="curlyBracket">&#123;</span><br />
                                    <div className="indent">
                                        <span className="variable">max</span> = <span className="function">int</span><span className="bracket">(</span><span className="variable">guess</span><span className="bracket">)</span><br />
                                    </div>
                                    <span className="curlyBracket">&#125;</span><br />
                                    <br />
                                    <span className="variable">previousGuess</span> = <span className="variable">guess</span><br />
                                    <span className="variable">guess</span> = math.<span className="function">Floor</span><span className="bracket">(</span><span className="function">float64</span><span className="bracket">((</span><span className="variable">min</span> + <span className="variable">max</span><span className="bracket">)</span> / 2<span className="bracket">))</span><br />
                                    <br />
                                    <span className="conditional">if</span> <span className="variable">guess</span> == <span className="variable">previousGuess</span><span className="curlyBracket"> &#123;</span><br />
                                    <div className="indent">
                                        <span className="conditional">return</span> <span className="keyword">false</span>, <span className="variable">guessCount</span>
                                    </div>
                                    <span className="curlyBracket">&#125;</span><br />
                                    <br />
                                    <span className="variable">guessCount</span>++
                                </div>
                                <span className="curlyBracket">&#125;</span><br />
                                <br />
                                <span className="conditional">return</span> <span className="keyword">true</span>, <span className="variable">guessCount</span>
                            </div>
                            <span className="curlyBracket">&#125;</span><br />
                        </p>
                    </div>
                </div>
            }   
        </div>
    );
}

export default Content;