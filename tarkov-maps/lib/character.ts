export type Character = {
  name: string
  icon: string
}

export const characters: Record<string, Character> = {
  sasasabi: {
    name: "笹錆",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1687189206/system%20images/member/member_sabi_512_lzx62f.png",
  },

  Hirundo: {
    name: "H君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1687189206/system%20images/member/member_H_512_b7njv5.png",
  },

  dRagon: {
    name: "R君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1687189207/system%20images/member/member_R_512_nlsmma.png",
  },

  Salary: {
    name: "S君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1687189207/system%20images/member/member_S_512_b04npb.png",
  },

  vegeTable: {
    name: "T君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1687189206/system%20images/member/member_T_512_sj8rhk.png",
  },

  Oldman: {
    name: "おじ",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1689706845/system%20images/member/member_O_512_xpyspz.png",
  },

  Jinx: {
    name: "J君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1693490100/system%20images/member/member_J_512_tw7gat.png",
  },

  saLmon: {
    name: "L君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1697379662/system%20images/member/member_L_512_bz4osw.png",
  },

  squId: {
    name: "I君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1697379603/system%20images/member/member_I_512_oexqsm.png",
  },

  Codroe: {
    name: "C君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1730386285/system%20images/member/member_C_512_t6sygf.png",
  },

  eggplaNt: {
    name: "N君",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1730386287/system%20images/member/member_N_512_dbcmjn.png",
  },
}

// デフォルト（未知キャラ用）
export const defaultCharacter: Character = {
    name: "???",
    icon: "https://res.cloudinary.com/dtifkcohv/image/upload/v1730386287/system%20images/member/member_N_512_dbcmjn.png",
}
