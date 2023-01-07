import './App.scss';
import logo from './assets/images/insure.svg';

function App() {
	return (
		<div className='App'>
			<div className='App__Header'></div>
			<div className='App__Main'>
				<div className='Job__List'>
					<div className='Job'>
						<div>
							<img src={`${logo}`} alt=''></img>
						</div>
						<div className='Job__Description'>
							<div className='Company__Name'>
								<p>Photosnap</p>
								<p>new!</p>
								<p>featured</p>
							</div>
							<p className='Position'>Senior Frontend Developer</p>
							<div className='Criteria'>
								<p>1d ago</p>
								<p>Full Time</p>
								<p>USA Only</p>
							</div>
							<hr />
							<div className='Tags'>
								<p>css</p>
								<p>react</p>
								<p>html</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
