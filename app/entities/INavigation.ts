export interface INavigation {
    goBack: () => void;
    navigate: (routeName: string, params?: any) => void;
    isFocused: () => boolean;
}