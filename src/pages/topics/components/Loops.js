import React, { useRef, useEffect } from "react";

const Loops = ({ subTopic }) => {
    const forRef = useRef();
    const forEachRef = useRef();
    const whileRef = useRef();
    const infiniteRef = useRef();

    const refLookup = {
        "for": forRef,
        "forEach": forEachRef,
        "while": whileRef,
        "infinite": infiniteRef,
    };

    useEffect(() => {
        const targetRef = refLookup[subTopic];
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }, [subTopic]);

    return (
        <div>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Loops</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Loops In Go</h1>
            <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
            <div ref={forRef}></div>

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
                <div ref={forEachRef}></div>
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
                <div ref={whileRef}></div>
            </div>
            <div />

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
                <div ref={infiniteRef}></div>
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
    );
}

export default Loops;