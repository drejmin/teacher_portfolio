import { useState } from "react"
// import { Button } from "./components/ui/button"
import { Switch } from "./components/ui/switch"
import { Moon, Sun } from "lucide-react"

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow z-50">
        <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <ul className="flex space-x-4 text-sm md:text-base">
            <li><a href="#bio">Bio</a></li>
            <li><a href="#reflections">Reflections</a></li>
            <li><a href="#artifacts">Artifacts</a></li>
            <li><a href="#goals">Goals</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <Switch
            checked={darkMode}
            onCheckedChange={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-2"
          >
            {darkMode ? <Moon /> : <Sun />}
          </Switch>
        </nav>
      </header>

      <main className="pt-20 space-y-16 px-4 max-w-4xl mx-auto">
        <section id="bio">
          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <p className="mb-4">
            I’m DeAndre Minor, a high school mathematics educator committed to building student-centered learning environments rooted in equity, academic rigor, and college readiness. My classroom blends mathematical logic, real-world applications, and creativity to help students grow into capable, confident thinkers.
          </p>
          <p>(A space for profile photo will be included here.)</p>
        </section>

        <section id="reflections">
          <h2 className="text-xl font-semibold mb-2">Reflections</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>TPE 1: Reflection will be added here.</li>
            <li>TPE 2: Reflection will be added here.</li>
            <li>TPE 3: Reflection will be added here.</li>
            <li>TPE 4: Reflection will be added here.</li>
            <li>TPE 5: Reflection will be added here.</li>
            <li>TPE 6: Reflection will be added here.</li>
          </ul>
        </section>

        <section id="artifacts">
          <h2 className="text-xl font-semibold mb-2">Artifacts</h2>
          <p>Professional artifacts will be added soon. This may include student work samples, lesson plans, or assessment tools.</p>
        </section>

        <section id="goals">
          <h2 className="text-xl font-semibold mb-2">Goals & Next Steps</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Strengthen my use of differentiated instruction and formative assessment tools.</li>
            <li>Integrate real-world applications in math through project-based learning.</li>
            <li>Build stronger family-school communication strategies.</li>
            <li>Continue refining restorative practices in classroom management.</li>
            <li>Expand my use of technology to support student reflection and voice.</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: deandre.minor@example.com</p>
          <p>LinkedIn: (Placeholder for future link)</p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DeAndre Minor. All rights reserved.
      </footer>
    </div>
  )
}