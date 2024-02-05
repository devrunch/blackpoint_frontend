import * as Tabs from '@radix-ui/react-tabs';
import './eachstyle/popup.css'
interface ChildComponentProps {
  toggleState: (newState: boolean) => void;
}
const LoginPopUp:React.FC<ChildComponentProps>= ({toggleState}) => {
  return (
    <Tabs.Root className="TabsRoot" style={{zIndex:"334"}} defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger bg-gray-700 text-gray-200" value="tab1">
        Login
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger bg-gray-700 text-gray-200" value="tab2">
        Register
      </Tabs.Trigger>
      <button className='bg-gray-700 text-gray-200 rounded-tr-lg w-6 text-center' onClick={()=>toggleState(false)}>x</button>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">Login into your account</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Email
        </label>
        <input className="Input" id="name" placeholder='abc@email.com' />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Password
        </label>
        <input className="Input" id="username" placeholder='****' />
      </fieldset>
      <a href="" className='text-gray-900 text-xs hover:underline'>Forgot password</a>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Login</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">Register Yourself!</p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Email 
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          Password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  )
}

export default LoginPopUp