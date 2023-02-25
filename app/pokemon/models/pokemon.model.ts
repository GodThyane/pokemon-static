export interface Ability {
   name: string;
   url: string;
}

export interface Abilities {
   ability: Ability;
   is_hidden: boolean;
   slot: number;
}

export interface Forms {
   name: string;
   url: string;
}

export interface Version {
   name: string;
   url: string;
}

export interface Game_indices {
   game_index: number;
   version: Version;
}

export interface Move {
   name: string;
   url: string;
}

export interface Move_learn_method {
   name: string;
   url: string;
}

export interface Version_group {
   name: string;
   url: string;
}

export interface Version_group_details {
   level_learned_at: number;
   move_learn_method: Move_learn_method;
   version_group: Version_group;
}

export interface Moves {
   move: Move;
   version_group_details: Version_group_details[];
}

export interface Specie {
   name: string;
   url: string;
}

export interface Dream_world {
   front_default: string;
   front_female?: any;
}

export interface Home {
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Officialartwork {
   front_default: string;
   front_shiny: string;
}

export interface Other {
   dream_world: Dream_world;
   home: Home;
   officialartwork: Officialartwork;
}

export interface Redblue {
   back_default: string;
   back_gray: string;
   back_transparent: string;
   front_default: string;
   front_gray: string;
   front_transparent: string;
}

export interface Yellow {
   back_default: string;
   back_gray: string;
   back_transparent: string;
   front_default: string;
   front_gray: string;
   front_transparent: string;
}

export interface Generationi {
   redblue: Redblue;
   yellow: Yellow;
}

export interface Crystal {
   back_default: string;
   back_shiny: string;
   back_shiny_transparent: string;
   back_transparent: string;
   front_default: string;
   front_shiny: string;
   front_shiny_transparent: string;
   front_transparent: string;
}

export interface Gold {
   back_default: string;
   back_shiny: string;
   front_default: string;
   front_shiny: string;
   front_transparent: string;
}

export interface Silver {
   back_default: string;
   back_shiny: string;
   front_default: string;
   front_shiny: string;
   front_transparent: string;
}

export interface Generationii {
   crystal: Crystal;
   gold: Gold;
   silver: Silver;
}

export interface Emerald {
   front_default: string;
   front_shiny: string;
}

export interface Fireredleafgreen {
   back_default: string;
   back_shiny: string;
   front_default: string;
   front_shiny: string;
}

export interface Rubysapphire {
   back_default: string;
   back_shiny: string;
   front_default: string;
   front_shiny: string;
}

export interface Generationiii {
   emerald: Emerald;
   fireredleafgreen: Fireredleafgreen;
   rubysapphire: Rubysapphire;
}

export interface Diamondpearl {
   back_default: string;
   back_female?: any;
   back_shiny: string;
   back_shiny_female?: any;
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Heartgoldsoulsilver {
   back_default: string;
   back_female?: any;
   back_shiny: string;
   back_shiny_female?: any;
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Platinum {
   back_default: string;
   back_female?: any;
   back_shiny: string;
   back_shiny_female?: any;
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Generationiv {
   diamondpearl: Diamondpearl;
   heartgoldsoulsilver: Heartgoldsoulsilver;
   platinum: Platinum;
}

export interface Animated {
   back_default: string;
   back_female?: any;
   back_shiny: string;
   back_shiny_female?: any;
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Blackwhite {
   animated: Animated;
   back_default: string;
   back_female?: any;
   back_shiny: string;
   back_shiny_female?: any;
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Generationv {
   blackwhite: Blackwhite;
}

export interface Omegarubyalphasapphire {
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Xy {
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Generationvi {
   omegarubyalphasapphire: Omegarubyalphasapphire;
   xy: Xy;
}

export interface Icons {
   front_default: string;
   front_female?: any;
}

export interface Ultrasunultramoon {
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
}

export interface Generationvii {
   icons: Icons;
   ultrasunultramoon: Ultrasunultramoon;
}

export interface Generationviii {
   icons: Icons;
}

export interface Versions {
   generationi: Generationi;
   generationii: Generationii;
   generationiii: Generationiii;
   generationiv: Generationiv;
   generationv: Generationv;
   generationvi: Generationvi;
   generationvii: Generationvii;
   generationviii: Generationviii;
}

export interface Sprite {
   back_default: string;
   back_female?: any;
   back_shiny: string;
   back_shiny_female?: any;
   front_default: string;
   front_female?: any;
   front_shiny: string;
   front_shiny_female?: any;
   other: Other;
   versions: Versions;
}
export interface Stat {
   base_stat: number;
   effort: number;
   stat: Stat;
}

export interface Type {
   name: string;
   url: string;
}

export interface Types {
   slot: number;
   type: Type;
}

export interface Pokemon {
   abilities: Abilities[];
   base_experience: number;
   forms: Forms[];
   game_indices: Game_indices[];
   height: number;
   held_items: any[];
   id: number;
   is_default: boolean;
   location_area_encounters: string;
   moves: Moves[];
   name: string;
   order: number;
   past_types: any[];
   species: Specie;
   sprites: Sprite;
   stats: Stat[];
   types: Types[];
   weight: number;
}
