/* tslint:disable */
/* eslint-disable */
/**
*/
export class AudioModule {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} gain
*/
  set_gain(gain: number): void;
/**
* @param {number} freq
*/
  set_frequency(freq: number): void;
/**
* @param {number} note
*/
  set_note(note: number): void;
}
/**
*/
export class WebGlCanvas {
  free(): void;
/**
* @param {string} canvas_id
*/
  constructor(canvas_id: string);
/**
* @param {number} time
*/
  render(time: number): void;
/**
* @param {string} url
* @returns {Promise<any>}
*/
  static load_image(url: string): Promise<any>;
/**
* @param {Uint8Array} img_data
*/
  load_texture(img_data: Uint8Array): void;
}
