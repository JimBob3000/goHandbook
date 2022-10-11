import React, { useRef, useEffect } from "react";

const Misc = ({ subTopic }) => {
    const recursionRef = useRef();

    const refLookup = {
        "recursion": recursionRef,
    };

    useEffect(() => {
        const targetRef = refLookup[subTopic];
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }, [subTopic]);

    return (
        <div>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Misc</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Misc paradigms In Go</h1>
            <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
            <div ref={recursionRef}></div>

            <hr className="my-14"></hr>

            <h2 className="text-2xl font-medium pb-8 text-slate-800">Recursion</h2>
            <div className="code">
            <span className="keyword">package</span> main<br />
                <br />
                <span className="keyword">import</span> <span className="string">"fmt"</span><br />
                <br />
                <span className="keyword">func</span> <span className="function">main</span><span className="bracket">() </span><span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        <span className="variable">term</span> := 5<br />
                        <span className="variable">result</span> := <span className="function">factorial</span><span className="bracket">(</span><span className="variable">term</span><span className="bracket">)</span><br />
                        <br />
                        fmt.<span className="function">Println</span><span className="bracket">(</span><span className="string">"%v factorial is %v.\n"</span>, <span className="variable">term</span>, <span className="variable">result</span><span className="bracket">)</span><br />
                   </div>
                <span className="curlyBracket">&#125;</span><br />
                <br />
                <span className="keyword">func</span> <span className="function">factorial</span><span className="bracket">(</span><span className="variable">n</span> <span className="type">int</span><span className="bracket">)</span> <span className="type">int</span> <span className="curlyBracket">&#123;</span><br />
                    <div className="indent">
                        <span className="conditional">if</span> <span className="variable">n</span> == 0 <span className="curlyBracket">&#123;</span><br />
                        <div className="indent">
                            <span className="conditional">return</span> 1
                        </div>
                        <span className="curlyBracket">&#125;</span><br />
                        <span className="conditional">return</span> <span className="variable">n</span> * <span className="function">factorial</span><span className="bracket">(</span><span className="variable">n</span>-1<span className="bracket">)</span>
                    </div>
                <span className="curlyBracket">&#125;</span><br />
            </div>
        </div>
    );
}

export default Misc;