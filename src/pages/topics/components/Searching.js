const Searching = () => {
    return (
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
    );
}

export default Searching;