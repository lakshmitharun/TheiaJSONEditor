/**
 * Generated using theia-extension-generator
 */
import { TharunHelloCommandContribution, TharunHelloMenuContribution } from './TharunHello-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TharunHelloCommandContribution);
    bind(MenuContribution).to(TharunHelloMenuContribution);
});
