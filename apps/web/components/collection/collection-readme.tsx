export function CollectionReadme() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>shadcn-date-picker</h1>
      
      <p>A customizable date picker component built with React and Tailwind CSS.</p>

      <h2>Features</h2>
      <ul>
        <li>Fully customizable with Tailwind CSS</li>
        <li>Keyboard navigation support</li>
        <li>Range selection</li>
        <li>Multiple date selection</li>
        <li>Disabled dates</li>
        <li>Custom date formatting</li>
      </ul>

      <h2>Installation</h2>
      <pre><code>yarm install @bylka/shadcn-date-picker</code></pre>

      <h2>Usage</h2>
      <p>Import and use the DatePicker component in your React application:</p>
      <pre><code>{`import { DatePicker } from '@bylka/shadcn-date-picker'

function App() {
  return (
    <DatePicker
      selected={date}
      onSelect={setDate}
    />
  )
}`}</code></pre>

      <h2>License</h2>
      <p>MIT © bylka</p>
    </div>
  );
} 