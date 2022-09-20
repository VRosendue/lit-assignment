import SignsButton from "../components/Signs/SignsButtons"
//import withAuth from "..."

// fetch("C:\Users\MKastr\Documents\GitHub\lit-assignment\public\img\")
//     .then(response => response.json())
//     .then(data => computers = data)
//     .then(computers => addComputersToList(computers));

const Translations = () => {
    return (
        <>
            <h1>Signs</h1>
            <section id="signs-options">
                <SignsButton name="a" image="img/a.png" key="a"/>
                <SignsButton name="b" image="img/b.png" key="b"/>
                <SignsButton name="c" image="img/c.png" key="c"/>
                <SignsButton name="d" image="img/d.png" key="d"/>
                <SignsButton name="e" image="img/e.png" key="e"/>
                <SignsButton name="f" image="img/f.png" key="f"/>
                <SignsButton name="g" image="img/g.png" key="g"/>
                <SignsButton name="h" image="img/h.png" key="h"/>
                <SignsButton name="i" image="img/i.png" key="i"/>
                <SignsButton name="j" image="img/j.png" key="j"/>
                <SignsButton name="k" image="img/k.png" key="k"/>
                <SignsButton name="l" image="img/l.png" key="l"/>
                <SignsButton name="m" image="img/m.png" key="m"/>
                <SignsButton name="n" image="img/n.png" key="n"/>
                <SignsButton name="o" image="img/o.png" key="o"/>
                <SignsButton name="p" image="img/p.png" key="p"/>
                <SignsButton name="q" image="img/q.png" key="q"/>
                <SignsButton name="r" image="img/r.png" key="r"/>
                <SignsButton name="s" image="img/s.png" key="s"/>
                <SignsButton name="t" image="img/t.png" key="t"/>
                <SignsButton name="u" image="img/u.png" key="u"/>
                <SignsButton name="v" image="img/v.png" key="v"/>
                <SignsButton name="w" image="img/w.png" key="w"/>
                <SignsButton name="x" image="img/x.png" key="x"/>
                <SignsButton name="y" image="img/y.png" key="y"/>
                <SignsButton name="z" image="img/z.png" key="z"/>
            </section>
        </>
    )
}
export default withAuth(Translations)