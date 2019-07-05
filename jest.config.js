module.exports = {
	setupFilesAfterEnv: ['./enzyme.config.js'],
	moduleFileExtensions: ['js', 'json', 'css', 'scss'],
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/mocks/fileMock.js'
	}
}
