//DISPLAY
const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;
const NUMBER_OF_PIXELS = SCREEN_WIDTH * SCREEN_HEIGHT;

//////////////////
//  ADDRESSES   //
//////////////////

//BIOS
const BIOS_START = 0x0000;
const BIOS_END = 0x00FF;
const BIOS_MEMORY_SIZE = BIOS_END - BIOS_START;

//ROM0  -   NON-SWITCHABLE ROM BANK
const ROM0_START = 0x0000;
const ROM0_END = 0x3FFF;
const ROM0_MEMORY_SIZE = ROM0_END - ROM0_START;

//ROMX  -   SWITCHABLE ROM BANK
const ROMX_START = 0x4000;
const ROMX_END = 0x7FFF; 
const ROMX_MEMORY_SIZE = ROMX_END - ROMX_START;

//VRAM  -   VIDEO RAM
const VRAM_START = 0x8000;
const VRAM_END = 0x9FFF;
const VRAM_MEMORY_SIZE = VRAM_END - VRAM_START;

//WRAM  -   WORK RAM
const WRAM_START = 0xC000;
const WRAM_END = 0xCFFF;
const WRAM_MEMORY_SIZE = WRAM_END - WRAM_START;

//WRAMX -   WORK RAM SWITCHABLE
const WRAMX_START = 0xD000;
const WRAMX_END = 0xDFFF;
const WRAMX_MEMORY_SIZE = WRAMX_END - WRAMX_START;

//ECHO
const ECHO_START = 0xE000;
const ECHO_END = 0xFDFF;
const ECHO_MEMORY_SIZE = ECHO_END - ECHO_START;

//OAM   -   Object Atribute Table   -   Sprite Information Table
const OAM_START = 0xFE00;
const OAM_END = 0xFE9F;
const OAM_MEMORY_SIZE = OAM_END - OAM_START;

//UNUSED
const UNUSED_START = 0xFEA0;
const UNUSED_END = 0xFEFF;
const UNUSED_MEMORY_SIZE = UNUSED_END - UNUSED_START;

//I/O REGISTERS
const IOREG_START = 0xFF00;
const IOREG_END = 0xFF7F;
const IOREG_MEMORY_SIZE = IOREG_END - IOREG_START;

//HRAM  -   INTERNAL CPU RAM
const HRAM_START = 0xFF80;
const HRAM_END = 0xFFFE;
const HRAM_MEMORY_SIZE = HRAM_END - HRAM_START;

//IE REGISTER   -   INTERRUPT ENABLE FLAGS
const IE_REG = 0xFFFF;

//Glitch. @JQartas <3
const l = 0;
const d = 0;
const mid = l + (d - l) / 2;