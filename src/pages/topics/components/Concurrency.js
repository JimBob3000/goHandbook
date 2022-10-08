import React, { useRef, useEffect } from "react";

const Concurrency = ({ subTopic }) => {
    const goroutineRef = useRef();
    const anonymousGoroutineRef = useRef();
    const waitGroupRef = useRef();

    const refLookup = {
        "goroutine": goroutineRef,
        "anonymousGoroutine": anonymousGoroutineRef,
        "waitGroup": waitGroupRef,
    };

    useEffect(() => {
        const targetRef = refLookup[subTopic];
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }, [subTopic]);

    return (
        <div>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Concurrency</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Concurrency In Go</h1>
            <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
            <div ref={goroutineRef}></div>

            <hr className="my-14"></hr>

            <h2 className="text-2xl font-medium pb-8 text-slate-800">Goroutine</h2>
            <div className="code">
                <span className="keyword">package</span> main<br />
                <br />
                <span className="keyword">import</span> <span className="bracket">(</span><br />
                <div className="indent">
                    <span className="package">"fmt"</span><br />
                    <span className="package">"time"</span><br />
                </div>
                <span className="bracket">)</span><br />
                <br />
                <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"App started"</span><span className="bracket">)</span><br />
                        <br />
                        <span className="conditional">go</span> <span className="function">welcome</span><span className="bracket">(</span><span className="string">"James"</span><span className="bracket">)</span><br />
                        <br />
                        <span className="comment">// Without a sleep, the main func finshes execution before the goroutine.</span><br />
                        <span className="comment">// This means the app closes and we would not see the goroutine output.</span><br />
                        <span className="comment">// We need to use wait groups to keep concurrency, not sleeps!</span><br />
                        time.<span className="function">sleep</span><span className="bracket">(</span>100 * time.Millisecond<span className="bracket">)</span><br />
                        <br />
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"App finished"</span><span className="bracket">)</span>
                    </div>
                <span className="curlyBracket">&#125;</span><br />
                <br />
                <span className="keyword">func</span> <span className="function">welcome</span><span className="bracket">(</span><span className="variable">name</span> <span className="type">string</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Welcome,"</span>, <span className="variable">name</span><span className="bracket">)</span><br />
                    </div>
                <span className="curlyBracket">&#125;</span><br />
            </div>
            <div ref={anonymousGoroutineRef}></div>

            <hr className="my-14"></hr>

            <h2 className="text-2xl font-medium pb-8 text-slate-800">Anonymous Goroutine</h2>
            <div className="code">
                <span className="keyword">package</span> main<br />
                <br />
                <span className="keyword">import</span> <span className="bracket">(</span><br />
                <div className="indent">
                    <span className="package">"fmt"</span><br />
                    <span className="package">"time"</span><br />
                </div>
                <span className="bracket">)</span><br />
                <br />
                <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"App started"</span><span className="bracket">)</span><br />
                        <br />
                        <span className="conditional">go</span> <span className="keyword">func</span><span className="bracket">(</span><span className="variable">name</span> <span className="type">string</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Welcome,"</span>, <span className="variable">name</span><span className="bracket">)</span><br />
                        </div>
                        <span className="curlyBracket">&#125;</span><span className="bracket">(</span><span className="string">"James"</span><span className="bracket">)</span><br />
                        <br />
                        <span className="comment">// Without a sleep, the main func finshes execution before the goroutine.</span><br />
                        <span className="comment">// This means the app closes and we would not see the goroutine output.</span><br />
                        <span className="comment">// We need to use wait groups to keep concurrency, not sleeps!</span><br />
                        time.<span className="function">sleep</span><span className="bracket">(</span>100 * time.Millisecond<span className="bracket">)</span><br />
                        <br />
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"App finished"</span><span className="bracket">)</span>
                    </div>
                <span className="curlyBracket">&#125;</span><br />
            </div>
            <div ref={waitGroupRef}></div>

            <hr className="my-14"></hr>

            <h2 className="text-2xl font-medium pb-8 text-slate-800">Wait Groups</h2>
            <div className="code">
                <span className="keyword">package</span> main<br />
                <br />
                <span className="keyword">import</span> <span className="bracket">(</span><br />
                <div className="indent">
                    <span className="package">"fmt"</span><br />
                    <span className="package">"sync"</span><br />
                </div>
                <span className="bracket">)</span><br />
                <br />
                <span className="keyword">var</span> <span className="variable">wg</span> sync.WaitGroup<br />
                <br />
                <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"App started"</span><span className="bracket">)</span><br />
                        <br />
                        <span className="variable">wg</span>.<span className="function">Add</span><span className="bracket">(</span>1<span className="bracket">)</span><br />
                        <span className="conditional">go</span> <span className="function">welcome</span><span className="bracket">(</span><span className="string">"James"</span><span className="bracket">)</span><br />
                        <br />
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"App finished - goroutine may finish after main func!"</span><span className="bracket">)</span><br />
                        <br />
                        <span className="variable">wg</span>.<span className="function">Wait</span><span className="bracket">(</span><span className="bracket">)</span><br />
                    </div>
                <span className="curlyBracket">&#125;</span><br />
                <br />
                <span className="keyword">func</span> <span className="function">welcome</span><span className="bracket">(</span><span className="variable">name</span> <span className="type">string</span><span className="bracket">)</span> <span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"Welcome,"</span>, <span className="variable">name</span><span className="bracket">)</span><br />
                        <span className="variable">wg</span>.<span className="function">Done</span><span className="bracket">(</span><span className="bracket">)</span>                    </div>
                <span className="curlyBracket">&#125;</span><br />
            </div>
        </div>
    );
}

export default Concurrency;