import React, { useRef, useEffect } from "react";

const Sorting = ({ subTopic }) => {
    const bubbleRef = useRef();
    const insertionRef = useRef();
    const cocktailRef = useRef();

    const refLookup = {
        "bubble": bubbleRef,
        "insertion": insertionRef,
        "cocktail": cocktailRef,
    };

    useEffect(() => {
        const targetRef = refLookup[subTopic];
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }, [subTopic]);

    return (
        <div>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Sorting</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Sorting Algorithms In Go</h1>
            <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
            <div ref={bubbleRef}></div>

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
            <div ref={insertionRef}></div>

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
            <div ref={cocktailRef}></div>

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
    );
}

export default Sorting;