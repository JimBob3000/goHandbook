import React, { useRef, useEffect } from "react";

const Structs = ({ subTopic }) => {
    const structRef = useRef();
    const embeddedStructRef = useRef();

    const refLookup = {
        "struct": structRef,
        "embeddedStruct": embeddedStructRef,
    };

    useEffect(() => {
        const targetRef = refLookup[subTopic];
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }, [subTopic]);

    return (
        <div>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">Structs</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Structs In Go</h1>
            <p className="text-[#334155]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum.</p>
            <div ref={structRef}></div>

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
            <div ref={embeddedStructRef}></div>

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
    );
}

export default Structs;