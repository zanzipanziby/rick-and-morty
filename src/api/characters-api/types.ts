export type GetAllCharactersResponseInfoType = {
	count: number
	pages: number
	next: string | null,
	prev: string | null
} | null

export type CharacterStatusType = "Alive" | "Dead" | "unknown"
export type CharacterType = {
	id: number
	name: string
	status: CharacterStatusType
	species: string
	type: string
	gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
	origin: {
		name: string
		url: string
	}
	location: {
		name: string
		url: string
	}
	image: string
	episode: string[]
	url: string
	created: string
}
export type GetAllCharactersResponseType = {
	info: GetAllCharactersResponseInfoType
	results: CharacterType[]
}

export type GetAllCharactersRequestType = {
	page?: number
	name?: string
	status?: string
}