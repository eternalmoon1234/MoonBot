//Typings/types
import {
    CollectorOptions,
    Message,
    MessageEmbed,
    Client,
    Role,
    Collection,
    MessageReaction,
    User,
    Snowflake,
    Guild,
    GuildAuditLogs,
    GuildMember,
    GuildEmoji,
    GuildAuditLogsActionType,
    EmojiResolvable,
    MessageCollector,
    ReactionCollector,
    ReactionEmoji,
    ReactionManager,
    ReactionUserManager,
    DMChannel,
    DataResolver,
    TextChannel,
    Collector,
    CollectorFilter,
    UserResolvable,
    EmojiIdentifierResolvable,
    ImageURLOptions
} from 'discord.js'

import { EventEmitter } from 'events';

class Message {
    constructor(options: Message) {

    }

    get id(): string;
    static toJSON: object;
    static fromJSON:(json: JSON) => Message;
}

export interface Message {
    message: Message;
    channel: TextChannel;
    role: Role;
    guild: Guild;
    emoji: GuildEmoji;
    client: Client;
    dmchannel: DMChannel; 

    auditGuild: GuildAuditLogs;
    guildMember: GuildMember;
    auditType: GuildAuditLogsActionType;
 
    collectorOptions: CollectorOptions;
    collection: Collection;
    collector: Collector;
    messageCollector: MessageCollector;
    collectorFilter: CollectorFilter;
}

export class Manager extends EventEmitter {
    constructor(client: Client, options?: ManagerOptions)
    public roles: Collection<string, Message>;
    private refresh(): Promise<void>;
    private debug(type: string, message: string, ...args: any);
    
    private parse(): Collection<string, any>;
    private store(): void;
    private messageReactionAdd(msgReaction: MessageReaction, user: User): Promise<void>;
    private messageReactionRemove(msgReaction: MessageReaction, user: User): Promise<void>;
    private allReactions(message: Message): Promise<void>;

    //Cover all events
    //Events main
    public static on(event: string, listener: (...args: any[]) => void): this;
    public static on(event: 'messageReactionAdd', listener: (member: GuildMember, role: Role) => void): this;
    public static on(event: 'messageReactionRemove', listener: (member: GuildMember, role: Role) => void): this;
    public static on(event: 'allReactions', listener: (member: GuildMember, role: Role) => void): this;

    //Channel
    public static on(event: 'channelCreate', listener: (member: GuildMember, role: Role) => void): this;
    public static on(event: 'channelDelete', listener: (member: GuildMember, role: Role, user: User) => void): this;
    public static on(event: 'channelUpdate', listener: (member: GuildMember, role: Role, user: User) => void): this;

    //Guild
    public static on(event: 'guildCreate', listener: (member: GuildMember, role: Role, user: User) => void): this;
    public static on(event: 'guildDelete', listener: (member: GuildMember, role: Role, user: User) => void): this;
    public static on(event: 'guildMemberAdd', listener: (member: GuildMember, role: Role, user: User) => void): this;
    public static on(event: 'guildMemberRemove', listener: (member: GuildMember, role: Role, user: User) => void): this;
    public static on(event: 'guildMemberUpdate', listener: (member: GuildMember, role: Role, user: User) => void): this;
    public static on(event: 'guildUpdate', listener: (member: GuildMember, role: Role, user: User) => void): this;
}

export class Controller {
    constructor(botMessage: Message, message: Message, collector: MessageCollector);
    public start(): void;
    public stop(): void;
    public pause(): void;
    public goPage(pageID: string): void;
    public get goBack(): boolean;
    public update(bool: boolean): Promise<void>;

    private get botMessage(): Message;
    private get lastPage(): Page;
    private get messageCollector(): MessageCollector
    private get collector(): MessageCollector
    private get reactionCollector(): ReactionCollector;
    private get pages(): Page;

    private set currentPage(): Page;
    private set currentPage(value);
    private set lastPage(value)
}

export class ReactionCollector extends ReactionCollector {
    public static menu(options: ReactionMenuOptions)
    public static createReactionCollector(options, ...args: any): ReactionCollector;
    public static reactionCollector(options: reactCollector): Promise<void>;
}

export class MessageCollector extends MessageCollector {
    public static collector(options: CollectorOptions): MessageCollector;
    public static createCollector(options): MessageCollector;
    public static config(options: configurationOptions): MessageCollector;
    public static menu(options: menuOptions): MessageCollector
    
    public static canCollect(options: canCollect): boolean
}

export interface canCollect {
    canCollect?: boolean;
    instance?: string;
}

export interface reactCollector {
    botMessage?: Message;
    user?: User;
    Guild?: Guild
    collectorOptions?: CollectorOptions;
    collector?: ReactionCollector;
    
    id?: string
    embed?: MessageEmbed | boolean | object
    reactEmitter: (controller: Controller, reaction: MessageReaction) => {}
}

export interface ReactionMenuOptions {
    botMessage: Message;
    user: User;
    collectorOptions?: CollectorOptions;
    guild?: Guild;
    collector?: ReactionCollector
}

export interface menuOptions {
    botMessage: Message;
    user: User;
    collectorOptions?: CollectorOptions; 
    collector?: MessageCollector
}

export interface configurationOptions {
    botMessage: Message;
    user: UserResolvable;
    collectorOptions?: CollectorOptions;
    collector?: MessageCollector
}

export interface ManagerOptions {
    store: true;
    debug: false;
    path: string;
}

export interface CollectorOptions {
    message: Message;
    user: UserResolvable;
    react: (botMSG: Message) => {};
    reactions?: EmojiIdentifierResolvable[]
    collectorOptions?: CollectorOptions;
    delete?: boolean;
    collector?: MessageCollector
    
    embed?: MessageEmbed | object | boolean
    messageEmitter?: (controller: Controller, message: Message) => {};
}

export interface ReactionMap {
    [key: string]: (reaction: MessageReaction, ...args: any) => {};
}

export interface Page {
    [key: string]: {
        id?: string;
        embed?: MessageEmbed | object;
        content?: string;
        reactions?: EmojiIdentifierResolvable[];
        backEmoji?: EmojiIdentifierResolvable;
        clear?: boolean;

        message: (controller: Controller, message: Message) => {}
        react: (controller: Controller, reaction: MessageReaction) => {};
    }
}