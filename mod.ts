// deno-lint-ignore-file ban-ts-comment
// @ts-nocheck
// reason: RaptorFX is supposed to be there in it's cores by default, we don't want to 'statically link' it.

/*
    The following are exposed typings for RaptorFX, intended to be used with the RaptorFX project.
    Copyright 2022 ReMod Software and RaptorFX Team under MIT License.
*/

// Note by LePichu: I ran `deno fmt` so the declarations might look a bit messy.

// Main object ->

/** RaptorFX is a module exposing the typings for RaptorFX cores. */
export declare const RaptorFX =
	{
		/** `Clipboard` subclass relates to the user's clipboard (store of keyboard copy items). */
		Clipboard:
			{
				/** Copies the content of user's clipboard. */
				copy():
					| HTMLImageElement
					| string {},
				/** Cuts content from user's clipboard and empties it. */
				cut():
					| HTMLImageElement
					| string {},
				/** Pushes custom data to user clipboard.
				 * @param {HTMLImageElement | string} content - Content which will be passed to user clipboard.
				 */
				push(
					content:
						| HTMLImageElement
						| string,
				): void {},
			},
		/** `Notifications` subclass manages notifications; push, group, pop. */
		Notifications:
			{
				/**
				 * Pushes the notification built from data, with the given configuration and channel to send to.
				 * @param {NotificationData} data - Represents the NotificationData as an Interface.
				 * @param {NotificationMode} mode - Represents the NotificationMode as an Enum.
				 */
				async push(
					data:
						NotificationData,
					mode:
						NotificationMode,
				): Promise {},
				/**
				 * Creates a Toast with data provided. (Mobile Only)
				 * @param {string} data - String of text to be presented on screen.
				 * @param {ToastLength} length - Length for how long the toast will be present on screen.
				 */
				createToast(
					data:
						string,
					length:
						ToastLength,
				): void {},
			},
		/** Window-related activities like Maximise, Minimize, and Position. */
		Window:
			{
				/** Maximizes the context window. */
				maximize(): void {},
				/** Minimizes the context window. */
				minimize(): void {},
				/** Completely exits the context window with an exit code.
				 * @param {number} code - Exit code which will be returned on exit.
				 */
				exit(
					code:
						number,
				): void {},
				/** If given arguments, changes the position of the window, without any arguments,
				 * the current cordinates of window are returned as PositionData
				 * @param {PositionData} newPosition - New Position of Window exposed as data with the interface Position Data.
				 */
				position(
					newPosition?:
						PositionData,
				): PositionData {},
				/** Sets or gets/returns the color of the status bar/window accent color
				 * if provided a hex color as paramater, defaults to set mode.
				 * @param {WindowBarMode} mode - Refers to which mode should the method act in; Set or Get.
				 * @param {string} hex - Hex code as string of color which will be set as notification bar or window accent color.
				 */
				statusBarColor(
					mode:
						WindowBarMode,
					hex?:
						string,
				):
					| string
					| void {},
			},
		/** System-related class which returns Architecture, OS, etc. */
		System:
			{
				/** Returns the architecture (x86, arm64 etc.) of the system as a string. */
				arch(): string {},
				/** Returns the operating system (windows_11, android_12 etc.) of the system as a string. */
				os(): string {},
				/** Returns the system's locale, for example: en_US, fr_FR, hi_IN etc. */
				locale(): string {},
			},
		/** These variables vary per platform, hence the name, this include paths to storage etc. */
		Variables:
			{
				/** Points to the path of the internal app storage, which could be a folder under
				 * $USER\LocalAppData\YourApp\ (on Windows), or data/data/YourApp (on Android). */
				LocalStorage:
					string,
				/** Points to the root of the file system, usually /mounted/0/ (on Android), or any
				 * absolute/relative path on other operating systems like Windows or Linux. */
				ExternalStorage:
					string,
			},
	};

// Interfaces
/**
 * Interface to expose Notification Data for Notifications subclass.
 */
export declare interface NotificationData {
	/** Main title of the notification. */
	title:
		string;
	/** Description/secondary title of the notification. */
	description:
		string;
	/** URL of the icon to show in the notification. */
	icon:
		URL;
}
/**
 * Interface to expose Positional Data for Window subclass' position() method.
 */
export declare interface PositionData {
	/** Starting coordinate in the X-Axis of the Window. */
	x: number;
	/** Starting coordinate in the Y-Axis of the Window. */
	y: number;
	/** Height of the Window. */
	height:
		number;
	/** Width of the Window. */
	width:
		number;
}

// Enums

/**
 * Accepts SHORT and LONG, self-describing length of Toast displayed on the screen.
 */
export declare enum ToastLength {
	SHORT =
		"short",
	LONG =
		"long",
}
/**
 * Accepts SINGLE and GROUP, where SINGLE creates a new notification for each push, while GROUP collects it into a single grouped notification.
 */
export declare enum NotificationMode {
	SINGLE =
		"single",
	GROUP =
		"group",
}
/**
 * Accepts SET and GET, where SET would make the function overwrite the current color of status bar if provided and return the hex provided, otherwise GET will simply return the current color without modifying.
 */
export declare enum WindowBarMode {
	SET =
		"set",
	GET =
		"get",
}
