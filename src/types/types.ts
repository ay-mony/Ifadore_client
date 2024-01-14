export interface SidebarItems {
    id: number;
    title: string;
    url: string;
    icon: React.ReactElement;
  }


export interface inputProps {
    id: number,
    title: string,
    amount: number,
    address: string,
    phone: number,
    name: string
}


export interface linkItems {
    id: number,
    name: string,
    url: string
}

export interface modalInputProps {
    id: number,
    type: string,
    name: string,
    placeholder?: string,
    min?: number,
    minLenght?: number,
    maxLenght?: number
}

<<<<<<< HEAD
export interface WidgetDetails {
    title: string;
    icon: React.ReactElement;
    amount: number;
  }
  
  export interface WidgetProps {
    type: 'polltax' | 'earnings' | 'rent' | 'month' | 'total';
  }
  
=======
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
