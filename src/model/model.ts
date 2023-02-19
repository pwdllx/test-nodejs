export interface IModel {
  /**
   * @throws {Error}
   */
  serialize(): string | never;
}