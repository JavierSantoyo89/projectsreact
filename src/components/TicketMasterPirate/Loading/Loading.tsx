import style from './Loading.module.css'

//***********************  Loading view  *********************/
//***********************  Show this view when loading  *********************/

export const Loading = () => {
	return (
		<div>
			<span className={style.loader}></span>
			<h2>Loading...</h2>
		</div>
	)
}