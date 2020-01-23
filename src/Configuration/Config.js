class Config {
	constructor() {
		this._config = {
			PathAPI: 'http://localhost:8000/api'
		}
	}

	get apiPath() {
		return this._config.PathAPI;
	}
}

export default Config;