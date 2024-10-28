import { Save, FolderOpen, FileJson2, SquareCheck, SquarePlus, SquareMinus, CopyCheck, SquareChevronRight, SquareChevronLeft, Reply as Reset, ReplyAll as ResetAll } from "lucide-react";

const About = () => {
    return (
    <section className="about">
      <h2>About</h2>
      <p>
        Flexbox layout solves so many problems in such a few lines! It centers elements in a breeze, tidy them up evenly, and facilitates responsive design. Vertical alignment? Not a problem anymore!
      </p>
      <p>
        But... It&apos;s also surprisingly hard to predict!
      </p>
      <p>
        Why won&apos;t my items grow up? What&apos;s the deal with <code>flex-basis</code>? What&apos;s that <code>flex-grow: 9999</code> hack everyone is talking about? Yes, we all mix up <code>justify-content</code> and <code>align-items</code> from time to time, but are you telling me that there&apos;s also <code>align-content</code>? Is that even a thing?
      </p>
      <p>
        The purpose of this website is to allow you to test every (well, <em>almost</em> every) flex property so that you can observe how the different values behave and influence each other.
      </p>
      <h3>How to use</h3>
      <p>
        You start with a flex container, some flex items and the rest is up to you! Click on the desired value and it will take effect immediately.</p>
      <p>
        Some properties allow you to enter lengths or numbers. Setting a number in a length input automatically converts it into pixels. Any valid CSS length should work, even <code>calc()</code> functions, but I haven&apos;t made thorough tests.
      </p>
      <p>
        Set <code>min-</code> and <code>max-</code> sizes by toggling the small buttons on the corresponding <code>width</code> and <code>height</code> controls.
      </p>
      <p>
        The <strong>left planel</strong> controls the flex container: display, size, direction, wrap, alignments and gap. The flex container has a default padding of 0.25rem and a 1px border to improve visibility. Press <Reset size={20} /> to reset the container to its initial values.
      </p>
      <p>
        The <strong>right panel</strong> controls the flex items: size, flex shorthand, self alignment, order, margin and text content. Dashed borders indicate mixed values.
      </p>
      <ul>
      <li>
        Toggle <CopyCheck size={20} />/<SquareCheck size={20} /> to select all items or only one. When all the items are selected, any setting you apply will affect every one of them.
        </li>
        <li>
        Press <Reset size={20} />/<ResetAll size={20} /> to reset one or all items to their initial values.
        </li>
      <li>Press <SquareChevronLeft size={20} />/<SquareChevronRight size={20} /> to select the previous or next item.</li>
      <li>Press <SquarePlus size={20} />/<SquareMinus size={20} /> to add a new item or delete the currently selected item.</li>
      </ul>
      <p>
        The <strong>center screen</strong> is where all the magic happens. The dashed border simulates the viewport boundary.
      </p>
      <h3>Some values are missing!</h3>
      <p>
        Use <code>start</code> and <code>end</code> as replacements for <code>flex-start</code>, <code>flex-end</code>, <code>left</code> or <code>right</code>. Baseline, anchor and safe alignments are not included.
      </p>
      <h3>Did you know?</h3>
      <p>
        According to the <a href="https://www.w3.org/TR/css-flexbox-1/#flex-components" target="_blank" rel="noopener noreferrer">official specification</a>, <code>flex-grow</code>, <code>flex-shrink</code> and <code>flex-basis</code> are not supposed to be set individually. Rather, you should use the <code>flex</code> shorthand in a very particular way. You may already know that <code>flex</code> is a shorthand for <code>flex-grow</code>, <code>flex-shrink</code> and <code>flex-basis</code>, but there is an even more interesting way to set this property.
      </p>
      <p>
        The <a href="https://www.w3.org/TR/css-flexbox-1/#flex-common" target="_blank" rel="noopener noreferrer">official docs</a> recommends to use <code>flex</code> with just four values: <code>initial</code>, <code>auto</code>, <code>none</code>, or a <code>&lt;number&gt;</code> (usually <code>1</code>). These values cover all the usual needs so that you don&apos;t have to deal anymore with finnicky shrinks, grows and basis!
      </p>
      <aside>
        <h4>The four flex values</h4>
        <p>
          <code>flex: initial</code> is the default setting and stands for <code>flex: 0 1 auto</code>. The item won&apos;t grow even if there is available space (<code>0</code>), it will shrink in order to prevent overflow (<code>1</code>), and the initial size defaults to the declared size (<code>auto</code>).
        </p>
        <p>
          <code>flex: auto</code> is equivalent to <code>flex: 1 1 auto</code>. The item will grow only if there is available space (<code>1</code>), it will shrink in order to prevent overflow (<code>1</code>), and the initial size defaults to the declared size (<code>auto</code>). This is the true meaning of a flexible item: it grows if it can and shrinks if it must.
        </p>
        <p>
          <code>flex: none</code> translates to <code>flex: 0 0 auto</code>. The item won&apos;t grow even if there is available space, and it won&apos;t shrink even if this causes overflow. The initial size defaults to the declared size (<code>auto</code>).
        </p>
        <p>
          <code>flex: &lt;number&gt;</code> is equivalent to <code>flex: &lt;number&gt; 1 0</code>. This makes the item to take up as much space as possible. As <code>flex-basis</code> is set to <code>0</code>, <code>flex-shrink</code> has no effect at all because the item can&apos;t shrink beyond <code>0</code>. It could as well be <code>0</code> or <code>37654</code> and it will behave exactly the same way. Setting <code>flex: 1</code> to every flex item is particularly useful to create even columns regardless of their contents size.
        </p>
      </aside>
      <p>
        The one-value syntax also admits <code>flex: &lt;length&gt;</code>, which translates to <code>flex: 1 1 &lt;length&gt;</code>. (Notice how <code>flex: auto</code> has the same effect because <code>auto</code> is a valid length).
      </p>
      <p>
        Even though a two-value syntax is officialy supported, it&apos;s currenly not available on this playground.
      </p>
      <h3>Toggle auto margin</h3>
      <p>
        Each <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> margin can be toggled between <code>0</code> and <code>auto</code>. This setting is available only when one single flex item is selected. Auto margins have a very useful and often unpredictable behaviour in flex layouts. This is actually one of my favorite settings! Try to combine them and see what happens!
      </p>
      <h3>Text content</h3>
      <p>
        Set the text content. By default it&apos;s a number representing the item&apos;s position. It can be set to an empty string.
      </p>
      <h3>Load and save</h3>
      <p>
        Press <FolderOpen size={20} /> to load presets or saved layouts.
      </p>
      <p>
        Press <Save size={20} /> to save the current layout in this browser.
      </p>
      <h3>Give me the code!</h3>
      <p>
        Press <FileJson2 size={20} /> to get the CSS code for the current state. Default values (or values that behave like the default ones) are not included. If the flex items are different among themselves you will end up with a bunch of <code>:nth-child()</code> selectors. Many of them will be probably redundant so you should come up with a better solution by yourself.
      </p>
      <h3>Resources</h3>
      <p>
        If you keep struggling with flex layouts, check out these amazing resources:
      </p>
      <p>
        <a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">An Interactive Guide to Flexbox</a>, by Josh W. Comeau
      </p>
      <p>
        <a href="https://www.youtube.com/@KevinPowell/videos" target="_blank" rel="noopener noreferrer">Kevin Powell YouTube Channel</a>
      </p>
      <p>
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Flexbox Layout Guide</a>, by Chris Coyier at CSS-Tricks
      </p>
      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" target="_blank" rel="noopener noreferrer">CSS flexible box layout</a>, at MDN Web Docs
      </p>
      <p>
        <a href="https://www.w3.org/TR/css-flexbox-1/" target="_blank" rel="noopener noreferrer">CSS Flexible Box Layout Module Level 1</a>: The official docs, I don&apos;t recommend them as a learning source but they may come in handy!
      </p>
      <h3>How it&apos;s made</h3>
      <p>
        This website is made with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a> and <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a>.
      </p>
      <p>
        Typographies: <a href="https://www.jetbrains.com/lp/mono/" target="_blank" rel="noopener noreferrer">JetBrains Mono</a> and <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer">Inter</a>.
      </p>
      <p>
        Icons by <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">Lucide</a>.
      </p>
      <h3>Who am I</h3>
      <p>My name is Daniel and I&apos;m an aspiring React developer based in Madrid, Spain.
        </p><p>You can find me at <a href="https://www.linkedin.com/in/djimenezweb/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/djimenezweb" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
    </section>
  );
};
export default About;
