import './style.css';
function InfoCard({ title, content, link }) {
	return (
	  <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
		<h3 class={"greentext"}>{title}</h3>
		<p>{content} <a href="mailto:lukeshort321@gmail.com">{link ?? null}</a></p>
    
	  </div>
	);
  }
  
  export function App() {
	return (
		<div class="app-one" style={{
			fontFamily: 'sans-serif',
			minHeight: '100vh',
			
			color: 'white',
			position: 'relative',
			overflow: 'hidden',
			  // Off-white background for contrast
			
		  }}>
		
	  
			<h1 class={"lessspace"}>Luke Short</h1>
			<h2 class={"greentext"}>Software Engineer</h2>
      <h2 class={"tantext"}>Chasing a Chance, LLC</h2>
			<div style={{ margin: '1rem 0', display: 'flex', gap: '1rem' }}>
  <a href="https://github.com/kuel321" target="_blank" rel="noopener noreferrer">
    <svg height="32" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78
      -.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
      2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1
      .16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54
      1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58
      -8-8-8z"/>
    </svg>
  </a>
  <a href="https://www.linkedin.com/in/luke-short-272434b8/" target="_blank" rel="noopener noreferrer">
    <svg height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 
      5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.28c-.83 
      0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5c.82 0 1.5.68 1.5 
      1.5s-.68 1.5-1.5 1.5zm13.25 10.28h-2.5v-4.5c0-1.08-.02-2.48-1.5-2.48-1.5
      0-1.75 1.17-1.75 2.38v4.6h-2.5v-9h2.4v1.23h.03c.34-.65 1.16-1.33 
      2.4-1.33 2.57 0 3.05 1.69 3.05 3.89v5.21z"/>
    </svg>
  </a>
</div>

			

<InfoCard 
  title="About Me" 
  content="I am a full stack developer with experience building both government and commercial applications. I currently develop secure, internal software for military and government use, working across the full stack with C#, React, Scriban, SQL, and Docker. My work includes building user interfaces, data management tools, and export features supporting military operations.

Outside of government projects, I’ve also built modern, public-facing websites and marketing tools for commercial clients while working in advertising agencies. This experience gives me a balance of security-focused, mission-critical development and fast-moving, user-focused web experiences." 
 link
 />
		<InfoCard 
    link
  title="Security Clearance" 
  content="Currently supporting military applications with active DoD (CAC) credential. Eligible for secure system access and trusted to work on government projects." 
/>


		
		<InfoCard 
    link="lukeshort321@gmail.com"
		  title="Contact" 
		  content="Email me at" 
		/>
	  </div>
	);
	
  }
  
  import { render } from 'preact';

render(<App />, document.getElementById('app'));