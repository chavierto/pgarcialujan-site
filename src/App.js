import './App.css';

function App() {
	let active = 'about';

	// query selector for all buttons and panels
	const navBtns = document.querySelectorAll('.navBtn');
	const panels = document.getElementsByClassName('.panel');
	console.log(panels);
	// console.log(activePanel);

	// add event listener to btns
	navBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			//run removeActiveClasses
			removeActiveClasses();
			btn.classList.add('active');
			active = btn.innerText.toLowerCase();
			// showHide();

			console.log(active);
		});
	});

	function removeActiveClasses() {
		navBtns.forEach((btn) => {
			btn.classList.remove('active');
		});
	}

	function showHide(panels) {
		panels.forEach((pnl) => {
			pnl.classList.add('panelHide');
		});
		// const activePanel = document.getElementsByClassName(`${active}`);
		// activePanel[0].classList.remove('panelHide');
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Patricia García Luján</h1>
				<nav>
					{/* Nav will handle navigation by hiding the sections through className */}

					<li>
						<div className='navBtn'>About</div>
					</li>
					<li>
						<div className='navBtn'>Work</div>
					</li>
					<li>
						<div className='navBtn'>Writing</div>
					</li>
					<li>
						<div className='navBtn'>Newsletter</div>
					</li>
					<li>
						<div className='navBtn'>Contact</div>
					</li>
				</nav>
			</header>
			<div className='body'>
				<div className='panel about'>
					<h2>About</h2>
					<p>Hi there, I’m a writer/editor based in Miami. </p>

					<p>I have extensive experience in web-based content.</p>
					<p>
						I’m well versed in the delicate art of UX copywriting, speak fluent
						SEO, and can work my way around any CMS.
					</p>
					<p>
						I used to live in New York and I’m originally from Venezuela.
						Growing up, I also lived in Spain, Italy, and Colombia.
					</p>
					<p>
						I like palm trees, mango season, cooking with butter, and swimming
						in the ocean year-round.
					</p>
					<p>
						Email me if you’d like to work together:&nbsp;
						<a
							href='mailto:pgarcialujan@gmail.com'
							target='_blank'
							rel='noopener noreferrer'>
							pgarcialujan@gmail.com
						</a>
						.
					</p>
				</div>
				<div className='panel panelHide work'>
					<h2>Work</h2>
					<p>
						I write web copy for brands. Everything from micro to long-form. Nav
						bars to newsletters. Mobile flows to ad scripts.
					</p>
					<p>I speak fluent SEO and know how to nail a CTA.</p>
					<p>
						I also help brands with their online strategy and can translate your
						content into Spanish—si eso es lo que quieres.
					</p>
					<p>
						Some of the brands I’ve worked with include Royal Caribbean, Bumble,
						Vogue, Over The Moon, and School of Whales.
					</p>
					<p>I respect a deadline and I’m always up for a challenge.</p>
				</div>
				<div className='panel panelHide writing'>
					<h2>Writing</h2>
					<p>
						In 2020, I was accepted as a James Michener fellow at the University
						of Miami’s MFA program in Creative Writing. I’m currently working on
						a book of short stories.
					</p>
					<p>
						In my previous life, I was a Culture Writer at Vogue.com. I wrote
						hundreds of articles but here are some of my favorites:
					</p>
					<li>
						<a
							href='https://www.vogue.com/article/learning-to-love-my-face'
							target='_blank'
							rel='noopener noreferrer'>
							How I Learned to Stop Worrying and Love My Nose
						</a>
					</li>
					<li>
						<a
							href='https://www.vogue.com/article/mac-miller-the-divine-feminine-album'
							target='_blank'
							rel='noopener noreferrer'>
							Mac Miller on Love, Ariana Grande, and the Last Thing That Made
							Him Cry
						</a>
					</li>
					<li>
						<a
							href='https://www.vogue.com/article/jane-fonda-workout-videos-health-aerobics-yoga-class-pass'
							target='_blank'
							rel='noopener noreferrer'>
							Jane Fonda’s 1982 Workout Is Still the Best Exercise Class Out
							There
						</a>
					</li>
					<li>
						<a
							href='http://www.vogue.com/9667985/email-snooping-relationships/'
							target='_blank'
							rel='noopener noreferrer'>
							Is Email Snooping the New Normal in Relationships?
						</a>
					</li>
				</div>
				<div className='panel panelHide newsletter'>
					<h2>Newsletter</h2>
					<p>
						For a while I wrote a weekly newsletter called Sobremesa—say it with
						me: soh-breh-meh-zah—about books, TV shows, social trends, celebrity
						gossip, and other fun stuff people liked to read during their Friday
						lunch breaks.
					</p>
					<p>
						It’s currently on hiatus, but might be making a comeback. Stay
						tuned.
					</p>
					<p>Here are some past editions:</p>
					<li>
						<a
							href='https://mailchi.mp/the-sobremesa/snooping-around?e=52b086fb60'
							target='_blank'
							rel='noopener noreferrer'>
							Snooping Around
						</a>
					</li>
					<li>
						<a
							href='https://mailchi.mp/the-sobremesa/youre-such-a-pisces?e=52b086fb60'
							target='_blank'
							rel='noopener noreferrer'>
							You're Such a Pisces
						</a>
					</li>
					<li>
						<a
							href='https://mailchi.mp/the-sobremesa/paradise-lost?e=52b086fb60'
							target='_blank'
							rel='noopener noreferrer'>
							Paradise Lost
						</a>
					</li>
				</div>
				<div className='panel panelHide contact'>
					<h2>Contact</h2>
					<p>
						<a
							href='mailto:pgarcialujan@gmail.com'
							target='_blank'
							rel='noopener noreferrer'>
							pgarcialujan@gmail.com
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
