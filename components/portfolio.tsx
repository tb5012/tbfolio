/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/uwrgbN8Khh1
 */
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  return (
    <div key="1" className="flex flex-col min-h-screen dark:text-white">
      <header className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-900 fixed w-full top-0 z-10">
        <div className="text-2xl font-bold">Your Name</div>
        <nav className="flex gap-4">
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Projects
          </Link>
          <Link className="hover:underline" href="#">
            Skills
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center h-[60vh] bg-gray-100 dark:bg-gray-800" id="about">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Hello, I'm Your Name
          </h1>
          <p className="text-lg text-center max-w-md">
            I'm a full-stack developer specialized in building high-quality websites and applications.
          </p>
        </section>
        <section className="py-12 bg-white dark:bg-gray-900" id="projects">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <Card className="group">
              <CardHeader
                className="bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder.svg')",
                }}
              >
                <CardTitle>Project 1</CardTitle>
              </CardHeader>
              <CardContent>A brief description of the project.</CardContent>
              <CardFooter>
                <Link className="underline" href="#">
                  View Details
                </Link>
              </CardFooter>
            </Card>
            <Card className="group">
              <CardHeader
                className="bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder.svg')",
                }}
              >
                <CardTitle>Project 2</CardTitle>
              </CardHeader>
              <CardContent>A brief description of the project.</CardContent>
              <CardFooter>
                <Link className="underline" href="#">
                  View Details
                </Link>
              </CardFooter>
            </Card>
            <Card className="group">
              <CardHeader
                className="bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder.svg')",
                }}
              >
                <CardTitle>Project 3</CardTitle>
              </CardHeader>
              <CardContent>A brief description of the project.</CardContent>
              <CardFooter>
                <Link className="underline" href="#">
                  View Details
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="py-12 bg-gray-100 dark:bg-gray-800" id="skills">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <Badge>JavaScript</Badge>
                <Badge>C/C++</Badge>
                <Badge>C#</Badge>
                <Badge>Visual Basic</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>LaTeX</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Linux</Badge>
                <Badge>.NET</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-4">
                <Badge>Git</Badge>
                <Badge>Visual Studio</Badge>
                <Badge>Visual Studio Code</Badge>
                <Badge>Valgrind</Badge>
                <Badge>GDB</Badge>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white dark:bg-gray-900" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <div className="flex justify-center">
            <Button>Contact Me</Button>
          </div>
        </section>
      </main>
      <footer className="h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <p className="text-sm">© Your Name</p>
      </footer>
    </div>
  )
}
