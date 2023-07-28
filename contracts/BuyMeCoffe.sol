// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;



contract BuyMeCoffe {
      
      struct Coffe {
        address from;
        address to;
        uint amount;
        uint time; 
      }
      
      Coffe[] all;

      event transfer(address f,address t,uint a);

       function sendTransaction( address f,address t,uint a) public {
          all.push(Coffe(f,t,a,block.timestamp));
          emit transfer(f, t, a);
      }

      function getAll() public view returns(Coffe[] memory){
        return all;
      }
      

}
